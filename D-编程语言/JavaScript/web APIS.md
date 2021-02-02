# web APIS 

> wangbin

## URLSearchParams

*NO support in ie*

> Gotchas 
>
> The `URLSearchParams` constructor does *not* parse full URLs. However, it will strip an initial leading `?` off of a string, if present.

```javascript
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"

```

# Performance



## MutationObserver

