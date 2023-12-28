> [mysql 入门](https://c.biancheng.net/mysql/10/)

### [1.数据类型](https://www.runoob.com/mysql/mysql-data-types.html)

MySQL 支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。







[1]: https://www.begtut.com/sql/sql-datatypes.html
[2]: https://www.tutorialsteacher.com/sqlserver/database-schema

### [2.Schema](https://www.tutorialsteacher.com/sqlserver/database-schema)





#### [2.start schema](https://en.wikipedia.org/wiki/Star_schema)

start schema有中心表，适合大数据



[1]: https://www.tutorialsteacher.com/sqlserver/database-schema
[2]: https://hasura.io/learn/database/mysql/core-concepts/3-schema-ddl-dml/
[3]: https://www.youtube.com/watch?v=3BZz8R7mqu0	"youtobe schema 讲解"
[4]: https://www.youtube.com/watch?v=x_ez4IlSGOE	"如何创建schema"

### [3.主键 primary key]()

### 4.外键约束

在MySQL中，外键是一种数据库约束，用于建立两个表之间的关系。外键约束确保了引用完整性，即只允许在关联表中存在的值出现在外键列中。这意味着，如果表A中的列作为外键指向表B的主键，那么表A中的每个外键值都必须在表B的主键列中有对应的值。

```sql
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (customer_id)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT,
    order_date DATE,
    customer_id INT,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

在这个例子中，`orders`表的`customer_id`列是一个外键，它引用了`customers`表的`customer_id`列。

### 5.索引

在MySQL中，索引是数据库表中一个或多个列的值存储在一个特定顺序的数据结构中，以便快速检索数据。索引的主要目的是提高查询性能，尤其是对于大量数据的表。然而，索引也会增加数据插入、删除和更新的开销，因为索引本身也需要维护。

**索引的类型**

1. **主键索引（PRIMARY KEY）**：
   - 每个表只能有一个主键索引。
   - 主键索引的值必须唯一，且不能为NULL。
2. **唯一索引（UNIQUE）**：
   - 确保列中的所有值都是唯一的。
   - 可以有多个唯一索引。
3. **普通索引（INDEX 或 KEY）**：
   - 最基本的索引类型，没有唯一性的限制。
   - 可以提高查询效率。
4. **全文索引（FULLTEXT）**：
   - 专门用于全文搜索。
   - 只能在`CHAR`、`VARCHAR`或`TEXT`类型的列上创建。
5. **组合索引（Composite Index）**：
   - 在表的多个列上创建的索引。
   - 可以提高多列查询条件的查询效率。

> mysql e-r diagram
