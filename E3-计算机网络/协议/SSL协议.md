### [1.SSL 原理](https://zhuanlan.zhihu.com/p/36981565)

但是在一切的最开始，A和B要通过网络交换public key。如果C在中间拦截了呢？

通过CA（Certificate Authority）来保证public key的真实性。CA也是基于非对称加密算法来工作。有了CA，B会先把自己的public key（和一些其他信息）交给CA。CA用自己的private key加密这些数据，加密完的数据称为B的**数字证书**。现在B要向A传递public key，B传递的是CA加密之后的数字证书。A收到以后，会通过CA发布的**CA证书**（包含了CA的public key），来解密B的数字证书，从而获得B的public key。

但是等等，A怎么确保CA证书不被劫持。C完全可以把一个假的CA证书发给A，进而欺骗A。CA的大杀器就是，CA把自己的CA证书集成在了浏览器和操作系统里面。A拿到浏览器或者操作系统的时候，已经有了CA证书，没有必要通过网络获取，那自然也不存在劫持的问题。



除非有种情况，A内置的CA证书被篡改了，例如A使用了盗版的系统，“优化”了的非官方浏览器，或者被病毒攻击了，那这个时候，A**有可能**会认可非CA认证的数字证书，C就有机会发起中间人攻击。所以，用正版至少是安全的。

所以，在现代，A和B之间要进行安全，省心的网络通信，需要经过以下几个步骤

- 通过CA体系交换public key
- 通过非对称加密算法，交换用于对称加密的密钥
- 通过对称加密算法，加密正常的网络通信

这基本就是SSL/TLS的工作过程了。

### ***HTTPS\***

- 用户向web服务器发起一个安全连接的请求
- 服务器返回经过CA认证的数字证书，证书里面包含了服务器的public key
- 用户拿到数字证书，用自己浏览器内置的CA证书解密得到服务器的public key
- 用户用服务器的public key加密一个用于接下来的对称加密算法的密钥，传给web服务器
  - 因为只有服务器有private key可以解密，所以不用担心中间人拦截这个加密的密钥
- 服务器拿到这个加密的密钥，解密获取密钥，再使用对称加密算法，和用户完成接下来的网络通信

> 为什么要用对象加密通讯，因为效率高。非对称的需要消耗大量计算。