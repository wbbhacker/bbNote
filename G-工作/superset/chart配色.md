### 1.如何给chart plugin 增加 chart control 配色选项并脱离原有配色体系？

1. 参照 `superset-ui-chart-control/src/shared-controls/index.tsx` 中的`color_scheme` 下来选择配色配置。

2. 自己按照`color_scheme` 配置 自定义一个新的。定义字段`color_scheme_pivot`。

   ```javascript
   import { CategoricalScheme } from '@superset-ui/core';
   
   const schemes = [
     {
       id: 'greenRed',
       label: 'Green/Red',
       colors: [
         '#16A37E',
         '#00C388',
         '#63CF9C',
         '#93DBB2',
         '#C0E8C8',
         '#FCC5AF',
         '#FEA981',
         '#FD8A60',
         '#FD6935',
         '#F14710',
       ],
     },
   ].map(s => new CategoricalScheme(s));
   
   const schemesCategorical = schemes.reduce(function(prev,cur) { 
     prev[cur.id] = cur
     return prev
   }, {})
   
   export default schemesCategorical
   ```

   

   ```json
   {
     name: 'color_scheme_pivot',
     config:{
       type: 'ColorSchemeControl',
       label: t('Color Scheme'),
       default: SCHEMESDEFAULT,
       renderTrigger: true,
       choices:()=>Object.keys(schemesCategorical).map(s => [s, s]),
       description: t('The color scheme for rendering chart'),
       schemes: ()=>schemesCategorical,
     }
   }
   ```

   >   不要用color_scheme 字段，因为这个字段是superset 原本配色体系用的。用了之后会导致冲突。

