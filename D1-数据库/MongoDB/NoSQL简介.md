#### 1.什么是NoSQL 数据库

NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是SQL"。

#### 2.NoSQL 数据库有哪些特点

- 可弹性扩展
- BASE 特性
- 大数据量、高性能
- 灵活的数据模型
- 高可用

#### 3.NoSQL数据库有哪些种类

##### 1.键值数据库

这类数据库主要是使用数据结构中的键 Key 来查找特定的数据Value。

优点：在存储时不采用任何模式，因此极易添加数据

这类数据库具有极高的读写性能，用于处理大量数据的高访问负载比较合适。

键值对数据库适合大量数据的高访问及写入负载场景，例如日志系统。

主要代表是 Redis、Flare。

##### 2.文档型数据库

这类数据库满足了海量数据的存储和访问需求，同时对字段要求不严格，可以随意增加、删除、修改字段，且不需要预先定义表结构，所以适用于各种网络应用。

主要代表是 MongoDB、CouchDB。

##### 3.列存储型数据库

主要代表是 Cassandra 、Hbase。

这类数据库查找速度快，可扩展性强，适合用作分布式文件存储系统。

##### 4.图数据库

主要代表是 InfoGrid 、Neo4J 。

这类数据库利用“图结构”的相关算法来存储实体之间的关系信息，适合用于构建社交网络和推荐系统的关系图谱。

#### 4.NoSQL 与 RDB 该怎么选择

> RDB 关系型数据库

既然 NoSQL 数据库有这么多的优势，那它是否可以直接取代关系型数据库？

NoSQL 并不能完全取代关系型数据库，NoSQL 主要被用来处理大量且多元数据的存储及运算问题。在这样的特性差异下，我们该如何选择合适的数据库以解决数据存储与处理问题呢？这里提供以下几点作为判断依据。

##### 1.数据模型的关联性要求

NoSQL 适合模型关联性比较低的应用。因此：

- 如果需要多表关联，则更适合用 RDB
- 如果对象实体关联少，则更适合用 NoSQL 数据库
  - 其中 MongoDB 可以支持复杂度相对高的数据结构，能够将相关联的数据以文档的方式嵌入，从而减少数据之间的关联操作

##### 2.数据库的性能要求

如果数据量多切访问速度至关重要，那么使用 NoSQL 数据库可能是比较合适的。NoSQL 数据库能通过数据的分布存储大幅地提供存储性能。

##### 3.数据的一致性要求

NoSQL 数据库有一个缺点：其在事务处理与一致性方面无法与 RDB 相提并论。

因此，NoSQL 数据库很难同时满足强一致性与高并发性。如果应用对性能有高要求，则 NoSQL 数据库只能做到数据最终一致。

##### 4.数据的可用性要求

考虑到数据不可用可能会造成风险，NoSQL 数据库提供了强大的数据可用性（在一些需要快速反馈信息给使用者的应用中，响应延迟也算某种程度的高可用）。

**一个项目并非只选择一种数据库，可以将其拆开设计，将需要 RDB 特性的放到 RDB 中管理，而其它数据放到 NoSQL 中管理。**









































