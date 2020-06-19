# Statements and declaration

> 语句与声明

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

## `for ... in`

会遍历原型上的对象

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

### ?.

```
let nestedProp = obj.first && obj.first.second;
// 两个相等
let nestedProp = obj.first?.second;

```

