1.MessageChannel 与 MessagePort

2.message、postmessage

3.BroadcastChannel

### [9.4 Channel messaging](https://html.spec.whatwg.org/multipage/web-messaging.html#channel-messaging)

*This section is non-normative.*

To enable independent pieces of code (e.g. running in different [browsing contexts](https://html.spec.whatwg.org/multipage/document-sequences.html#browsing-context)) to communicate directly, authors can use [channel messaging](https://html.spec.whatwg.org/multipage/web-messaging.html#channel-messaging).

Communication channels in this mechanism are implemented as two-ways pipes, with a port at each end. Messages sent in one port are delivered at the other port, and vice-versa. Messages are delivered as DOM events, without interrupting or blocking running [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task).

To create a connection (two "entangled" ports), the `MessageChannel()` constructor is called:

```
var channel = new MessageChannel();
```

One of the ports is kept as the local port, and the other port is sent to the remote code, e.g. using `postMessage()`:

```
otherWindow.postMessage('hello', 'https://example.com', [channel.port2]);
```

To send messages, the `postMessage()` method on the port is used:

```
channel.port1.postMessage('hello');
```

To receive messages, one listens to `message` events:

```
channel.port1.onmessage = handleMessage;
function handleMessage(event) {
  // message is in event.data
  // ...
}
```

Data sent on a port can be structured data; for example here an array of strings is passed on a `MessagePort`:

```
port1.postMessage(['hello', 'world']);
```

### 1.[MessageChannel](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel)  宏任务

#### [Constructor](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel#constructor)

- [`MessageChannel()`](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/MessageChannel)

  Returns a new `MessageChannel` object with two new [`MessagePort`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort) objects.

> 此处需要注意: `MessageChannel`在浏览器事件循环中属于`宏任务`, 所以调度中心永远是`异步执行`回调函数.


### 2.[MessagePort](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)

#### [Instance methods](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort#instance_methods)

[`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage)

Sends a message from the port, and optionally, transfers ownership of objects to other browsing contexts.

[`start()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/start)

Starts the sending of messages queued on the port (only needed when using [`EventTarget.addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener); it is implied when using [`onmessage`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/message_event)).

[`close()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/close)

Disconnects the port, so it is no longer active.

#### [Events](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort#events)

- [`message`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/message_event)

  Fired when a `MessagePort` object receives a message.

- [`messageerror`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/messageerror_event)

  Fired when a `MessagePort` object receives a message that can't be deserialized.

### 



```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />
    <title>Channel messaging demo</title>
  </head>
  <body>
    <h1>Channel messaging demo</h1>
    <p class="output">My body</p>
    <iframe src="page2.html" width="480" height="320"></iframe>
    <script>
     const channel = new MessageChannel();
     const output = document.querySelector('.output');
     const iframe = document.querySelector('iframe');

      // Wait for the iframe to load
      iframe.addEventListener("load", onLoad);

      function onLoad() {
        // Listen for messages on port1
        channel.port1.onmessage = onMessage;
        // Transfer port2 to the iframe
        iframe.contentWindow.postMessage("Hello from the main page!", "*", [
          channel.port2,
        ]);
      }

      // Handle messages received on port1
      function onMessage(e) {
        output.innerHTML = e.data;
      }
    </script>
  </body>
</html>
```

```html
<!-- page2.html -->
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />
    <title>My page title</title>
  </head>
  <body>
    <p class="output">iFrame body</p>
    <script>
      const output = document.querySelector(".output");

      window.addEventListener("message", onMessage);

      function onMessage(e) {
        output.innerHTML = e.data;
        // Use the transfered port to post a message back to the main frame
        e.ports[0].postMessage("Message back from the IFrame");
      }
    </script>
  </body>
</html>
```



### [3.Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <title>Channel messaging demo</title>
    <link
      href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Lobster+Two"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Channel messaging demo</h1>
    <p id="message-output">Message not yet sent</p>

    <form>
      <label for="message-input">Send a message</label>
      <input type="text" id="message-input" autofocus />
      <button>Send Message</button>
    </form>

    <iframe src="page2.html" width="480" height="320"></iframe>
    <script>
      const input = document.getElementById("message-input");
      const output = document.getElementById("message-output");
      const button = document.querySelector("button");
      const iframe = document.querySelector("iframe");
      const channel = new MessageChannel();
      const port1 = channel.port1;

      // Wait for the iframe to load
      iframe.addEventListener("load", onLoad);

      function onLoad() {
        // Listen for button clicks
        button.addEventListener("click", onClick);
        // Listen for messages on port1
        port1.onmessage = onMessage;
        // Transfer port2 to the iframe
        iframe.contentWindow.postMessage("init", "*", [channel.port2]);
      }

      // Post a message on port1 when the button is clicked
      function onClick(e) {
        e.preventDefault();
        port1.postMessage(input.value);
      }

      // Handle messages received on port1
      function onMessage(e) {
        output.innerHTML = e.data;
        input.value = "";
      }
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>    
  <meta name="viewport" content="width=device-width" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <title>My page title</title>
    <link
      href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Lobster+Two"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <ul></ul>
    <script>
      const list = document.querySelector("ul");
      let port2;

      // Listen for the intial port transfer message
      window.addEventListener("message", initPort);

      // Setup the transfered port
      function initPort(e) {
        port2 = e.ports[0];
        port2.onmessage = onMessage;
      }

      // Handle messages received on port2
      function onMessage(e) {
        const listItem = document.createElement("li");
        listItem.textContent = e.data;
        list.appendChild(listItem);
        port2.postMessage('Message received by IFrame: "' + e.data + '"');
      }
    </script>
  </body>
</html>
```

### [4.BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)

