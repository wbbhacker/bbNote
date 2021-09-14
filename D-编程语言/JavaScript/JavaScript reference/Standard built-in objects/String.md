# String

1. charAt

2. Replace()

   `const newStr = str.replace(regexp|substr, newSubstr|function)`

   ```javascript
   
   function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
       return (offset > 0 ? '-' : '') + match.toLowerCase();
     }
     return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
   }
   ```
   
3. slice()

