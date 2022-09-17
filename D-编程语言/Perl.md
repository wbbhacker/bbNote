### 1.IF(expr,v1,v2)

如果表达式 expr 成立，返回结果 v1；否则，返回结果 v2。

```sql
SELECT IF(1 > 0,'正确','错误')     --正确
```

### 2.LEFT(s,n)

 返回字符串 s 的前 n 个字符

```sql
SELECT LEFT('runoob',2) -- ru
```

