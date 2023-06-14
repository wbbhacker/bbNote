### [1.electron](http://man.hubwiz.com/docset/electron.docset/Contents/Resources/Documents/index.html)

#### [1.main/render process](http://man.hubwiz.com/docset/electron.docset/Contents/Resources/Documents/docs/tutorial/application-architecture.html#electron-application-architecture)

 the process that runs `package.json`'s `main` script is called **the main process**. The script that runs in the main process can display a GUI by creating web pages. An Electron app always has one main process, but never more.

Since Electron uses Chromium for displaying web pages, Chromium's multi-process architecture is also used. Each web page in Electron runs in its own process, which is called **the renderer process**.

> 主线程和渲染线程的区别
>
> 1. 主线程每创建一个页面，就会创建一个BrowserWindow实例。每个BrowserWindow实例有自己的渲染线程，渲染页面。BrowserWindow实例销毁了，渲染线程也就终止了。
> 2. 主线程管理者所有页面和其渲染线程。渲染线程之间相互隔离，只关心其自己的页面。
> 3. 渲染线程不能直接调用GUI，只能通过主线程去调用。
>
> 主线程与渲染线程之间通讯
>
> Like [`ipcRenderer`](http://man.hubwiz.com/docset/electron.docset/Contents/Resources/Documents/docs/api/ipc-renderer.html) and [`ipcMain`](http://man.hubwiz.com/docset/electron.docset/Contents/Resources/Documents/docs/api/ipc-main/index.html) modules for sending messages, and the [remote](http://man.hubwiz.com/docset/electron.docset/Contents/Resources/Documents/docs/api/remote.html) module for RPC style communication. 