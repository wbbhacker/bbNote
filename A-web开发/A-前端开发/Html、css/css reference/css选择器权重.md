### css选择器的权重（特异性）

#### css选择器特异性（权重）算法

css特异性算法是基于三类选择器，三列形式权重来计算的。 A-B-C

A = ID选择器的数量

B= 类选择器的数量+ 属性选择器的数量+伪类的数量

C= 类型选择器的数量+伪类元素的数量

通配符`*`、`:where()`、组合选择器 `+`、`~`、`>` 、`""` ，忽略权重。

特殊的两类











[1]: https://www.w3.org/TR/selectors/#specificity	" css 特异性"
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity	"MDN css 特异性"

