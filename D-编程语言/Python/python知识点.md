### [1.@函数装饰器](http://c.biancheng.net/view/2270.html)

function decorator

### [2.函数注释](https://docs.python.org/3/tutorial/controlflow.html#function-annotations) 

Function Annotations

```python
def f(ham: str, eggs: str = 'eggs') -> str:
    print("Annotations:", f.__annotations__)
    print("Arguments:", ham, eggs)
    return ham + ' and ' + eggs

f('spam')

```

### 3.`lambda`

