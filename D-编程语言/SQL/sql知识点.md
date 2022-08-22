### 1.查询

#### 1.`or`

```sql
SELECT
    name, population, area
FROM
    world
WHERE
    area >= 3000000 OR population >= 25000000
;
```

```sql
//UNION 连接子查询
SELECT
    name, population, area
FROM
    world
WHERE
    area >= 3000000

UNION

SELECT
    name, population, area
FROM
    world
WHERE
    population >= 25000000
;
```

```sql
select username from users where company = 'bbc' or company = 'itv';
```

This is equivalent to:

```sql
select username from users where company IN ('bbc', 'itv');
```

#### 2.`union` 子查询

UNION 操作符用于合并两个或多个 SELECT 语句的结果集。

1.请注意，UNION 内部的每个 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每个 SELECT 语句中的列的顺序必须相同。

2.默认地，UNION 操作符选取不同的值。如果允许重复的值，请使用 `UNION ALL`。

[1]: https://stackoverflow.com/questions/13750475/sql-performance-union-vs-or	" SQL Performance UNION vs OR"
[2]: https://www.runoob.com/sql/sql-union.html

#### 3.`in`

IN 操作符允许您在 WHERE 子句中规定多个值。

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1,value2,...);
```

#### 4.`null` 用 `is null`

```sql
select name from customer where referee_id != 2 or referee_id is null;
```

#### 5.`select distinct` 去重

在表中，一个列可能会包含多个重复值，有时您也许希望仅仅列出不同（distinct）的值。

```sql
SELECT DISTINCT column_name,column_name
FROM table_name;
```

#### 6.`order by`

```sql
SELECT column_name,column_name
FROM table_name
ORDER BY column_name,column_name ASC|DESC;
```

#### 7.JOIN

##### 1.`INNER JOIN`

> `INNER JOIN` 与` JOIN` 是相同的。

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name=table2.column_name;
```

INNER JOIN 关键字在表中存在至少一个匹配时返回行。

![image-20220822154322823](../../image/image-20220822154322823.png)

eg:

```sql
SELECT Websites.name, access_log.count, access_log.date
FROM Websites
INNER JOIN access_log
ON Websites.id=access_log.site_id
ORDER BY access_log.count;
```

##### 2.`LEFT JOIN`

> 在某些数据库中，LEFT JOIN 称为 LEFT OUTER JOIN。

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name=table2.column_name;
```

LEFT JOIN 关键字从左表（table1）返回所有的行，即使右表（table2）中没有匹配。如果右表中没有匹配，则结果为 NULL。

![image-20220822154854086](../../image/image-20220822154854086.png)



eg:

```sql
SELECT Websites.name, access_log.count, access_log.date
FROM Websites
LEFT JOIN access_log
ON Websites.id=access_log.site_id
ORDER BY access_log.count DESC;
```

##### 3.`RIGHT JOIN`

> 在某些数据库中，RIGHT JOIN 称为 RIGHT OUTER JOIN。

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name=table2.column_name;
```

RIGHT JOIN 关键字从右表（table2）返回所有的行，即使左表（table1）中没有匹配。如果左表中没有匹配，则结果为 NULL。

![image-20220822155841472](../../image/image-20220822155841472.png)

eg:

```sql
SELECT websites.name, access_log.count, access_log.date
FROM websites
RIGHT JOIN access_log
ON access_log.site_id=websites.id
ORDER BY access_log.count DESC;
```

##### 4.`FULL JOIN`

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name=table2.column_name;
```

FULL OUTER JOIN 关键字只要左表（table1）和右表（table2）其中一个表中存在匹配，则返回行.

FULL OUTER JOIN 关键字结合了 LEFT JOIN 和 RIGHT JOIN 的结果。

![image-20220822180955190](../../image/image-20220822180955190.png)



eg:

```sql
SELECT Websites.name, access_log.count, access_log.date
FROM Websites
FULL OUTER JOIN access_log
ON Websites.id=access_log.site_id
ORDER BY access_log.count DESC;
```













































