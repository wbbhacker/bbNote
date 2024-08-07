

### 1.java基础

[Java教程](https://www.runoob.com/java/java-tutorial.html)

```java
/** GFG.java */
public class GFG {
	public static void main(String[] args)
	{
		System.out.println("GFG!");
	}
}

```

```shell
javac GFG.java
java GFG
```

> **Source File Name**
>
> The name of a source file should exactly match the public class name with the extension of .**java**. The name of the file can be a different name if it does not have any public class. Assume you have a public class **GFG**.

<img src="../../image/image-20220722112035093.png" alt="image-20220722112035093" style="zoom:50%;" />

### 2.注解

在Java中，注解（Annotation）是一种将元数据（metadata）与Java代码相关联的方法。元数据是关于程序中数据和代码的额外信息，它可以用于描述代码的结构、行为和约束。注解可以提供编译时和运行时的额外信息，用于代码生成、编译检查、运行时处理等。

Java注解有以下几种类型：

1. 标准注解：Java提供了一些预定义的标准注解，例如@Override、@Deprecated、@SuppressWarnings等。这些注解可以提高代码的可读性和编译器的诊断能力。

2. 元注解：元注解是用于定义其他注解的注解。Java提供了一些预定义的元注解，例如@Retention、@Target、@Documented、@Inherited等。这些注解可以用来控制自定义注解的行为和约束。

3. 自定义注解：用户可以通过使用元注解来创建自己的注解。自定义注解可以用于提供编译时或运行时的特定信息，用于实现特定的功能或约束。

   要创建自定义注解，需要使用@interface关键字。

### 3. JDK, JRE and JVM

<img src="../../image/image-20220722112356552.png" alt="image-20220722112356552" style="zoom:50%;" />

### 4.private、public、protected

- **default** (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。
- **private** : 在同一类内可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）**
- **public** : 对所有类可见。使用对象：类、接口、变量、方法
- **protected** : 对同一包内的类和所有子类可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）**。

### 5.static

Java 中的 static 字段是指静态字段，也称为类字段。它是属于类的字段，而不是属于对象的字段。在类加载时，静态字段会被初始化并分配空间，在类被卸载时销毁。然后可以通过类名直接访问，而无需实例化类对象。

### 6.synchronized

给 log() 函数加互斥锁（Java 中可以通过 synchronized 的关键字），同一时刻只允许一个线程调用执行 log() 函数。

```java
public class Logger {
  private FileWriter writer;

  public Logger() {
    File file = new File("/Users/wangzheng/log.txt");
    writer = new FileWriter(file, true); //true表示追加写入
  }
  
  public void log(String message) {
    synchronized(this) {
      writer.write(mesasge);
    }
  }
}
```

### [7.final](https://blog.csdn.net/qq_24309787/article/details/100942044)

final作为Java中的关键字可以用于三个地方。用于修饰类、类属性和类方法。

特征：凡是引用final关键字的地方皆不可修改！

(1)修饰类：表示该类不能被继承；

(2)修饰方法：表示方法不能被[重写](https://so.csdn.net/so/search?q=重写&spm=1001.2101.3001.7020)；

(3)修饰变量：表示变量只能一次赋值以后值不能被修改（常量）。

[1]: https://juejin.cn/post/7208745710766276664?from=search-suggest	"DTO、VO、BO、PO、DO的用法区别，居然这么多人搞不清楚....."

