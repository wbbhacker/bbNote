### ArrayBuffer、TypedArray、DataView、Base64、Blob

#### 1.ArrayBuffer

1. 什么是ArrayBuffer？

   > 带类型的高速数组

   ```javascript
   //ArrayBuffer是一块内存,下面是开辟了1kb大小的内存
   //不能通过buf变量的索引去操作这块内存
   //要访问ArrayBuffer，需要用到 Typed Array
   var buf = new ArrayBuffer(1024)
   var view   = new Int32Array(buffer);
   ```


#### 2.Base64

In [computer science](https://en.wikipedia.org/wiki/Computer_science), **Base64** is a group of [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent [binary data](https://en.wikipedia.org/wiki/Binary_data) in an [ASCII](https://en.wikipedia.org/wiki/ASCII) string format by translating it into a [radix](https://en.wikipedia.org/wiki/Radix)-64 representation. The term *Base64* originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding). Each Base64 digit represents exactly 6 bits of data. Three 8-bit bytes (i.e., a total of 24 bits) can therefore be represented by four 6-bit Base64 digits.



#### 3.Blob





#### 4.Plain text

#### 5.Binary-to-text encoding

A **binary-to-text encoding** is [encoding](https://en.wikipedia.org/wiki/Code) of [data](https://en.wikipedia.org/wiki/Data_(computing)) in [plain text](https://en.wikipedia.org/wiki/Plain_text). More precisely, it is an encoding of binary data in a sequence of [printable characters](https://en.wikipedia.org/wiki/Character_(computing)). These encodings are necessary for transmission of data when the channel does not allow binary data (such as [email](https://en.wikipedia.org/wiki/Email) or [NNTP](https://en.wikipedia.org/wiki/NNTP)) or is not [8-bit clean](https://en.wikipedia.org/wiki/8-bit_clean). [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) documentation ([RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4880](https://tools.ietf.org/html/rfc4880)) uses the term **ASCII armor** for binary-to-text encoding when referring to [Base64](https://en.wikipedia.org/wiki/Base64).



#### 6.Blob、base64、arrayBuffer之间的转换

​	