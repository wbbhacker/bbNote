### [Performance](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

#### [1.performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

从浏览器标签开始加载页面的时候计时。

### [`Performance.now` vs. `Date.now`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now#performance.now_vs._date.now)

Unlike [`Date.now`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now), the timestamps returned by `performance.now()` are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also, `Date.now()` may have been impacted by system and user clock adjustments, clock skew, etc. as it is relative to the Unix epoch (1970-01-01T00:00:00Z) and dependent on the system clock. The `performance.now()` method on the other hand is relative to the `timeOrigin` property which is a [monotonic clock](https://w3c.github.io/hr-time/#dfn-monotonic-clock): its current time never decreases and isn't subject to adjustments.