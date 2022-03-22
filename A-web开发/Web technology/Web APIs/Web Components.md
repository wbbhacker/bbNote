### [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

1. Web Components 涉及三个主要技术:

   Custom elements、Shadow Dom、HTML template三部分组成

   Custom elements： A set of JavaScript APIs that allow you to define custom elements and their behaviour

   Shadow Dom： A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element 

   HTML template: The <template>and <slot> enable you to write markup templates that are not displayed in the rendered page

2. 创建Web Componets 的步骤

   1. Create a class in which you specify your web component functionality
   2. Register your new custom element using the [`CustomElementRegistry.define()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) method,
   3. If required, attach a shadow DOM to the custom element using [`Element.attachShadow()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow) method. 
   4. If required, define an HTML template using <template> and <slot>
   5. Use your custom element wherever you like on your page

3. 

