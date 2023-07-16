### 1.getStaticProps

ssg 渲染方式，在服务端拉取数据，且只能在服务端调用。

> server  static generation

```jsx
export default function Home({ allPostsData }) {
  return export default function Home({ allPostsData }) {
      return ( <div></div>  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
```

### 2.getServerSideProps

ssr 渲染方式，在服务端拉取数据。

> server-side Rendering

### 3.SWR

https://swr.vercel.app/zh-CN
