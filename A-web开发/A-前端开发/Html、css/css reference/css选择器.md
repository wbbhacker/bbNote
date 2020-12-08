### css选择器

#### 一、基础选择符

1. `*`  

    `*{}` 选择所有元素

2. `elementname` 

   `p{}`  选择所有p 元素

3. `.classname` 

   `.intro{}` 选择class=”intro“的所有元素

4. `#idname` id选择器

   `#firstname` 选择id=”firstname“的所有元素

5. `[attr=value]` 属性选择器

   - `a[target]{}` 

     选择带有 target 属性所有a元素

   - `a[target=_blank]]{}`  *等于*

      选择 target="_blank" 的所有a元素

   - `div[lang~=en-us]{}`     *含有*

     选择 lang 属性值以空格隔开的列表中包含单词 "en-us" 的所有div元素

     `<div lang="en-us en-gb en-au en-nz">Hello World!</div>`

     ```css
     div[lang~="en-us"] {
     	color: blue;
     }
     ```

   - `a[href*="insensitive" i] {} `  *含有*

     选择href属性含有”insensitive“ 字符且忽略带小写的所有a元素

     `<li><a href="#InSensitive">Insensitive internal link</a></li>`

     `a[href*="insensitive" i] {}`

   - `a[src^=https]{}`   *开头*

     选择其 src 属性值以 "https" 开头的每个 a 元素

   - `a[src$=".pdf"]  `   *结尾*

     选择其 src 属性以 ".pdf" 结尾的所有 a 元素

#### 二、**分组选择符**

1. `,`

   ```css
   span,
   div {
     border: red 2px solid;
   }
   /*选择所有匹配的元素节点*/
   ```

#### 三、组合选择符

1. `+`

   `A+B` 选择紧挨A后面的兄弟B元素

   `<ul><li>1</li><li class="box">2</li><li>3</li><li>4</li></ul>`

   `li.box + li{}`选择 `<li>3</li>`

2. `~`

   `A~B` 选择A后面的兄弟所有B元素

   `<ul><li>1</li><li class="box">2</li><li>3</li><li>4</li></ul>`

   `li.box ~ li{ } ` 选择 `<li>3</li>和<li>4</li>`

   

3. `>` 

   `A>B` 选择A的直系子元素B

   `<div class="parent"><div class="son"><div class="grandson"></div></div></div>`

   `div.parent > div{} ` 选择 `<div class="son">`

   

4. ` `

   `A B` 选择A的子元素B	

   `<div class="parent"><div class="son"><div class="grandson"></div></div></div>`

   `div.parent div{}` 选择`<div class="son"> 和 <div class="grandson">`

   

   