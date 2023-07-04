### [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

```javascript
// 将数字格式化为千分位表示法
function formatNumberToThousandth(value) {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(value);
}

const number = 1234567.89;
const formattedNumber = formatNumberToThousandth(number);

console.log(formattedNumber); // 输出：1,234,567.89

```

```javascript
// 格式化日期
const date = new Date('2023-06-12 00:00:00');
const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
const formattedDate = formatter.format(date);

console.log(formattedDate); // 输出：06/12/2023

// 将格式化后的日期转换为 YYYY-MM-DD 格式
const [month, day, year] = formattedDate.split('/');
const formattedDate2 = `${year}-${month}-${day}`;

console.log(formattedDate2); // 输出：2023-06-12

```

```javascript
const percentFormatter = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2 });
const num = 0.123456;
console.log(percentFormatter.format(num)); // 输出："12.35%"

```

