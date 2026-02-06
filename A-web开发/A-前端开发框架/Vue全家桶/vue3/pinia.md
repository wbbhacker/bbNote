总结 Pinia store 中不同响应式类型的用法：

- reactive：直接使用，不需要 storeToRefs

- ref：需要使用 storeToRefs，否则会失去响应式

- computed：需要使用 storeToRefs，否则会失去响应式