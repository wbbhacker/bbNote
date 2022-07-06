### [Number and dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)

#### 1.Decimal numbers

```javascript
1234567890
42

// Caution when using leading zeros:

0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)

```

#### 2.Binary numbers

```javascript
const FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
const FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
const FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

#### 3.Octal numbers

```javascript
const n = 0755; // 493
const m = 0644; // 420
```

#### 4.Hexadecimal numbers

```javascript
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10

```

#### 5.Exponentiation

```javascript
1E3   // 1000
2e6   // 2000000
0.1e2 // 10
```

#### 6.Number object

```javascript
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

