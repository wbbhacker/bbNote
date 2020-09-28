### 虚拟Dom中key的作用和好处

要分析虚拟Dom中key的作用，首页要先找到key 都在哪些地方使用了。

#### 一、key 的使用地方

vue源码中`src/core/vdom/patch.js`中，有5处地方用到了key，3个函数和2处逻辑 。分别为：

1. **sameVnode 函数**，此函数根据新旧Vnode 的key ，判断新旧Vnode 是否相同。新旧Vnode 的key 都不设置

   和设置相同时`a.key === b.key` 都为true，切记。

   sameVnode 中在 diff 算法中出现频次很多，直接影响diff算法的判断。源码如下：

   ```javascript
   function sameVnode (a, b) {
     return (
       a.key === b.key && (
         (
           a.tag === b.tag &&
           a.isComment === b.isComment &&
           isDef(a.data) === isDef(b.data) &&
           sameInputType(a, b)
         ) || (
           isTrue(a.isAsyncPlaceholder) &&
           a.asyncFactory === b.asyncFactory &&
           isUndef(b.asyncFactory.error)
         )
       )
     )
   }
   ```

   

2. **createKeyToOldIdx 函数**，此函数获取旧子节点Vnode数组，在给定区间内含有key 的子Vnode 的key 键索引位置。源码如下：

   ```javascript
   function createKeyToOldIdx (children, beginIdx, endIdx) {
     let i, key
     const map = {}
     for (i = beginIdx; i <= endIdx; ++i) {
       key = children[i].key
       if (isDef(key)) map[key] = i
     }
     return map
   }
   ```

   createKeyToOldIdx在比较新旧vode子孩子节点中的 updateChildren函数中调用。

3. **checkDuplicateKeys 函数**，此函数检查vnode 数组中是否有vnode的key 重复，如果重复则给出警告。

4. patchVnode 函数中，判断新旧vnode 是否是克隆关系用到

   ```javascript
   // patchVnode 函数
   // reuse element for static trees.
   // note we only do this if the vnode is cloned -
   // if the new node is not cloned it means the render functions have been
   // reset by the hot-reload-api and we need to do a proper re-render.
   if (isTrue(vnode.isStatic) &&
       isTrue(oldVnode.isStatic) &&
       vnode.key === oldVnode.key &&
       (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
     vnode.componentInstance = oldVnode.componentInstance
     return
   }
   ```

5. updateChildren 函数Diff算法时的处理逻辑中用到

   ```javascript
   // updateChildren 函数
   if{
     // ....
   } else { 
     if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
     idxInOld = isDef(newStartVnode.key)
       ? oldKeyToIdx[newStartVnode.key]
     : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
     if (isUndef(idxInOld)) { // New element
       createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
     } else {
       vnodeToMove = oldCh[idxInOld]
       if (sameVnode(vnodeToMove, newStartVnode)) {
         patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
         oldCh[idxInOld] = undefined
         canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
       } else {
         // same key but different element. treat as new element
         createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
       }
     }
     newStartVnode = newCh[++newStartIdx]
   }
   ```

#### 二、key的作用与好处

首先把上述3中的**checkDuplicateKeys函数**排除，因为此函数是检查key是否重复的，无其他意义。

上述4逻辑中的key，用来判断两个虚拟Dom 是否为克隆关系。

上述1的sameVnode 函数调用很多，有7处在`src/core/vdom/patch.js`,6处在`updateChildren`函数的DIff 算法中调用。1处在`patch`函数调用，判断新旧虚拟Dom 是否相同，相同则调用patchVnode 函数继续往下比较如下：

```javascript
// patch 函数
if (!isRealElement && sameVnode(oldVnode, vnode)) { //新旧Vnode都存在且相同时
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
 } else {  
   // 新旧Vnode 都存在且不相同时，删除旧Vnode，添加新的Vnode。
 }
        
```

这里可以有两个场景可以用到，通过设置不同的key，实现

- 完整地触发组件的生命周期钩子
- 触发过渡

同时如果设置key ，sameVnode 函数比较两个不同key的Vnode 时，更快速度的判断两个Vnode 不相同。

上述2、5都是在`updateChildren` 函数中的Diff 算法用到，用以标记虚拟Dom，如果提供了key，能更快速，效率

进行比较及复用。

#### 三、总结

key的作用和好处是给虚拟Dom（Vnode）提供索引，进行删除、添加等操作时更加快捷。通过设置不同的key，可以完整地触发组件的生命周期钩子和触发过渡。

