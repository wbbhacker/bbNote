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

```mysql
select 
 name, 
 concat(round(population/(select population from world where name = 'Germany'),0),'%') 
from world 
where continent = 'Europe';
```



### 5.MID(s,n,len)

从字符串 s 的 n 位置截取长度为 len 的子字符串，同 SUBSTRING(s,n,len)

### 6.REPLACE(s,s1,s2)

将字符串 s2 替代字符串 s 中的字符串 s1

### 7.LENGTH 

### 8.OVER
[1]: https://hg95.github.io/DataBase/MySQL/%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0/%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0.html	"窗口函数"

### [9.CAST](https://www.w3ccoo.com/mysql/func_mysql_cast.asp)

CAST() 函数将一个值（任何类型）转换为指定的数据类型。

### 10.IFNULL、NULLIF、ISNULL

[1]: https://blog.csdn.net/pan_junbiao/article/details/85928004	" MySQL中IF()、IFNULL()、NULLIF()、ISNULL()函数的使用"

### [11.AVG、SUM](https://www.w3ccoo.com/mysql/mysql_count_avg_sum.html)

### 12.SPLIT

### 13.开窗函数

[1]: https://cloud.baidu.com/article/2862241	"深入了解SQL开窗函数"

### 14.ALL  排序问题



