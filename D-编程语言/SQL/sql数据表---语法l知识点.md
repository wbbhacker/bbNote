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

#### 11.`limit`

limit和offset用法

mysql里分页一般用limit来实现

`select* from article LIMIT 1,3`

`select * from article LIMIT 3 OFFSET 1`

上面两种写法都表示取2,3,4三条条数据

当limit后面跟两个参数的时候，第一个数表示要跳过的数量，后一位表示要取的数量,例如

select* from article LIMIT 1,3 就是跳过1条数据,从第2条数据开始取，取3条数据，也就是取2,3,4三条数据

当 limit后面跟一个参数的时候，该参数表示要取的数据的数量

#### 12.Having

`HAVING` 是 SQL 中与 `GROUP BY` 子句配合使用的重要子句，用于对分组后的结果进行筛选。

`HAVING` 类似于 `WHERE` 子句，但关键区别在于：

- `WHERE` 在分组前对原始数据进行筛选
- `HAVING` 在分组后对聚合结果进行筛选

```sql
-- WHERE 先筛选，然后分组
SELECT department, AVG(salary)
FROM employees
WHERE hire_date > '2020-01-01'
GROUP BY department;

-- HAVING 先分组，然后筛选聚合结果
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;
```

> 1. `HAVING` 必须与 `GROUP BY` 一起使用（除非 `GROUP BY` 省略时整个表作为一组）
> 2. `HAVING` 子句中可以使用聚合函数，而 `WHERE` 不能
> 3. 性能考虑：先使用 `WHERE` 减少数据量，再用 `HAVING` 筛选分组

#### 13.with

##### SQL 中的 WITH 子句（公用表表达式 CTE）

WITH 子句，也称为公用表表达式（Common Table Expression，CTE），是 SQL 中一个非常有用的功能，它允许你定义一个临时结果集，该结果集可以在后续的查询中引用。

##### 基本语法

```sql
WITH cte_name AS (
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
)
SELECT * FROM cte_name;
```

##### CTE 的主要特点

1. **临时结果集**：CTE 只在查询执行期间存在
2. **可读性**：使复杂查询更易于理解和维护
3. **可递归**：支持递归查询（递归 CTE）
4. **可多次引用**：在同一个查询中可以多次引用同一个 CTE

##### 使用场景

###### 1. 简化复杂查询

```sql
WITH sales_summary AS (
    SELECT product_id, SUM(quantity) as total_quantity
    FROM sales
    GROUP BY product_id
)
SELECT p.product_name, s.total_quantity
FROM products p
JOIN sales_summary s ON p.product_id = s.product_id;
```

###### 2. 替代子查询

```sql
-- 使用子查询
SELECT * FROM (
    SELECT employee_id, salary FROM employees
) AS emp_salary;

-- 使用CTE更清晰
WITH emp_salary AS (
    SELECT employee_id, salary FROM employees
)
SELECT * FROM emp_salary;
```

###### 3. 递归查询（处理层次结构数据）

```sql
WITH RECURSIVE employee_hierarchy AS (
    -- 基础查询（锚成员）
    SELECT employee_id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- 递归部分（递归成员）
    SELECT e.employee_id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy;
```

##### 多个 CTE

可以在一个查询中定义多个 CTE：

```sql
WITH 
department_stats AS (
    SELECT department_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department_id
),
high_paying_depts AS (
    SELECT department_id 
    FROM department_stats 
    WHERE avg_salary > 100000
)
SELECT e.employee_id, e.name
FROM employees e
JOIN high_paying_depts h ON e.department_id = h.department_id;
```

##### 优点总结

1. **提高可读性**：将复杂查询分解为逻辑部分
2. **避免重复**：可以多次引用同一个 CTE 而不需要重复编写
3. **支持递归**：处理树形或层次结构数据
4. **替代视图**：当只需要临时使用时，比创建视图更方便

WITH 子句是现代 SQL 中非常重要的功能，特别是在处理复杂查询时能显著提高代码的可读性和可维护性。

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

### 5.子查询

子查询要起名字 `as 'name'`

```sql
-- 最外层，增加limit
select
  `sys_imp_date`,
  `REVENUE_USD`
from
  (
    -- 第五层， 增加时间过滤条件
    select
      *
    from
      (
        -- 第四层，重命名
        select
          `sys_imp_date`,
          `payment_detail_REVENUE_USD` as `REVENUE_USD`
        from
          (
            -- 第三层， 聚合
            select
              sum(`payment_detail_REVENUE_USD`) as `payment_detail_REVENUE_USD`,
              `sys_imp_date`
            from
              (
                -- 第二层，取需要的字段
                select
                  `REVENUE_USD` as `payment_detail_REVENUE_USD`,
                  `EVENT_DATE` as `sys_imp_date`
                from
                  (
                    -- 第一层，全部取
                    select
                      *
                    from
                      `dbgpt`.`op_fact_payment`
                  ) as `payment_detail`
              ) as `src00_payment_detail_394f`
            group by
              `sys_imp_date`
          ) as `payment_detail_0`
      ) as `src2_`
    where
      (
        `sys_imp_date` >= '2023-08-10'
        and `sys_imp_date` <= '2023-11-07'
      )
  ) as `payment_detail_1`
limit
  365
```

```sql
select
  `REVENUE_USD` as `payment_detail_REVENUE_USD`,
  `EVENT_DATE` as `sys_imp_date`
from
  (
    -- 第一层，全部取
    select
      *
    from
      `dbgpt`.`op_fact_payment`
  ) as `payment_detail`
  
 # 内部查询（子查询） 为
  select * from  `dbgpt`.`op_fact_payment`
  这个查询结果被命名为payment_detail
  #外部查询为
  select
  `REVENUE_USD` as `payment_detail_REVENUE_USD`,
  `EVENT_DATE` as `sys_imp_date`
	from `payment_detail`
	
	
	
	#不能没有  as `payment_detail`  不然会报错
  
```

6





























 
