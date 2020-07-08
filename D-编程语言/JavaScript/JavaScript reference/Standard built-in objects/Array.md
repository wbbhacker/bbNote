# Array

#### 1.Array.prototype.reduce()

Syntax

```
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```

```javascript
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)
```

#### 2.Array.from()

