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

`ASC` 升序  `DESC` 降序

```sql
SELECT column_name,column_name
FROM table_name
ORDER BY column_name,column_name ASC|DESC;
```

```mysql
SELECT winner, subject
  FROM nobel
 WHERE yr=1984
 ORDER BY subject in ('Chemistry','Physics'), subject, winner
 # 'Chemistry','Physics' 在最后，因为 ``
```

The expression **subject IN ('chemistry','physics')** can be used as a value - it will be **0** or **1**.    

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

#### 8.定义表变量

[Select_within_SELECT_Tutorial](https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial)

```mysql
SELECT continent, name FROM world x
  WHERE name <= ALL
    (SELECT name FROM world y
        WHERE y.continent=x.continent)
```

```mysql
SELECT continent, name, area FROM world x
  WHERE area >= ALL
    (SELECT area FROM world y
        WHERE y.continent=x.continent
          AND area>0)
```

```mysql
SELECT name, continent, population FROM world x
  WHERE 25000000 >= ALL(SELECT population
	                FROM world y
		        WHERE x.continent = y.continent
                        AND y.population>0);
```

```mysql
SELECT name, continent FROM world x
  WHERE population >= ALL(SELECT population*3
                         FROM world y
                         WHERE x.continent = y.continent
                         and y.name != x.name)
```

#### 9.`case when`

```mysql
#第一种CASE语法返回的是第一个value=compare_value为true的分支的结果。

CASE value
    WHEN compare_value THEN result
    [WHEN compare_value THEN result ...]
    [ELSE result]
END
```

```mysql
#第二种CASE语法返回的是第一个condition为true的分支的结果。

SELECT
    CASE (`字段`|`表达式`) IS NULL
        WHEN TRUE THEN '结果为真'
        ELSE '结果为假'
    END
FROM `table_name`
```

#### 10.`group by`

GROUP BY 语句根据一个或多个列对结果集进行分组。在分组的列上我们可以使用 COUNT, SUM, AVG,等函数。

```sql
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```

```mysql
SELECT reward_name AS "reward_name",
       group_name AS "group_name",
       COUNT(*) AS "count"
FROM adhoc_analysis.zyh_temp_player_festival_exchange_20231024
WHERE activity_name IN ('2023halloween')
GROUP BY reward_name,
         group_name
LIMIT 50000;

 #将数据表按名字进行分组，并统计每个人有多少条记录： 看这个例子理解上面的例子
 SELECT name, COUNT(*) FROM   employee_tbl GROUP BY name;
```



https://juejin.cn/post/6971040309065187342

### 2.修改&排序

#### [1.排序](https://www.runoob.com/mysql/mysql-order-by.html)

```mysql
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
ORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]
```

> asc 升序  desc 倒序

```sql
select employee_id,if(employee_id % 2 = 1,if(left(name,1) != 'M',salary,0), 0) as bonus from Employees order by employee_id;
```

#### 2.正则表达式 REGEXP 

```sql
mysql> SELECT name FROM person_tbl WHERE name REGEXP 'ok$';
```

#### 3.更新 UPDATE

```sql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

#### 4.删除 DELETE

```sql
DELETE FROM table_name [WHERE Clause]
```

```sql
DELETE p1 FROM Person p1,
    Person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id;
```









### 3.插入数据

```sql
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```

> **INSERT IGNORE INTO 与   INSERT INTO的区别？**
>
> **INSERT IGNORE INTO** 会忽略数据库中已经存在的数据，如果数据库没有数据，就插入新的数据，如果有数据的话就跳过这条数据。这样就可以保留数据库中已经存在数据，达到在间隙中插入数据的目的。
>
> **INSERT IGNORE INTO** 当插入数据时，在设置了记录的唯一性后，如果插入重复数据，将不返回错误，只以警告形式返回。 而 **INSERT INTO** 如果存在 primary 或 unique 相同的记录，则先删除掉。再插入新记录。

### [4.处理重复的数据](https://www.runoob.com/mysql/mysql-handling-duplicates.html)

#### 1.防止表中出现重复数据

#### 2.统计重复数据

```sql
mysql> SELECT COUNT(*) as repetitions, last_name, first_name
    -> FROM person_tbl
    -> GROUP BY last_name, first_name
    -> HAVING repetitions > 1;
```































