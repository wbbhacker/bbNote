### 运算符

#### 1.IN 在集合中

`NOT IN` 不在集合中

```mysql
select 5  in (1,2,3,4,5); // in (...)
select 5 not in (1,2,3,4,5);
```

#### 2.BETWEEN 在两值之间

`NOT BETWEEN` 不在两值中间

```mysql
SELECT name, area FROM world 
  WHERE area BETWEEN 250000 AND 300000   //. between ... and ...
```

#### 3.LIKE

SQL LIKE 子句中使用百分号 **%**字符来表示任意字符

```
'%a'     //以a结尾的数据
'a%'     //以a开头的数据
'%a%'    //含有a的数据
'_a_'    //三位且中间字母是a的
'_a'     //两位且结尾字母是a的
'a_'     //两位且开头字母是a的
```

```
[]：表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个。
[^] ：表示不在括号所列之内的单个字符。其取值和 [] 相同，但它要求所匹配对象为指定字符以外的任一个字符。
查询内容包含通配符时,由于通配符的缘故，导致我们查询特殊字符 “%”、“_”、“[” 的语句无法正常实现，而把特殊字符用 “[ ]” 括起便可正常查询。
```

```mysql

SELECT * from runoob_tbl  WHERE runoob_author LIKE '%COM';
SELECT name FROM world WHERE name LIKE '%a%a%a%'; // 找出所有國家,其名字包括三個或以上的a。
```

#### 4.IS NULL 

为空

`IS NOT NULL` 为空

#### 5.<>不等于