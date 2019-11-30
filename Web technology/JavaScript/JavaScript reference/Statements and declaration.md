# Statements and declaration

> wangbin

## `for ... of` 

*NO support in ie*

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

```

# `for ... in`

```javascript
const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
 
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

