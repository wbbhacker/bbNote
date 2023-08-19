https://www.runoob.com/mysql/mysql-functions.html

### 1.IF

`IF(expr,v1,v2)`

如果表达式 expr 成立，返回结果 v1；否则，返回结果 v2。

```sql
SELECT IF(1 > 0,'正确','错误')    
->正确
```

### 2.LEFT

`LEFT(s,n)`

返回字符串 s 的前 n 个字符.。

```sql
SELECT LEFT('runoob',2) -- ru
```

### 3.COUNT

`COUNT(expression)`

 返回查询的记录总数，expression 参数是一个字段或者 * 号

```sql
SELECT COUNT(ProductID) AS NumberOfProducts FROM Products;
```

### 4.[.CONCAT(s1,s2...sn)](https://www.runoob.com/mysql/mysql-functions.html)

字符串 s1,s2 等多个字符串合并为一个字符串

```mysql
#找出所有首都和其国家名字,而首都要有国家名字中出現。
select capital,name from world where capital like concat('%',name,'%'); 
#找出所有首都和其国家名字,而首都是国家名字的延伸。
select name,capital from world where capital like concat(name,' ','_%');
#Show the name and the extension where the capital is a proper (non-empty) extension of name of the country.
select name ,replace(capital,name,'') from world where capital like concat(name,'_%');
```

### 5.MID(s,n,len)

从字符串 s 的 n 位置截取长度为 len 的子字符串，同 SUBSTRING(s,n,len)

### 6.REPLACE(s,s1,s2)

将字符串 s2 替代字符串 s 中的字符串 s1

7.LENGTH 
