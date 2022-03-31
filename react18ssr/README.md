### react 18 ssr demo

### 涉及 API

- renderToPipeableStream
- hydrateRoot
- React.Suspense
- React.Lazy

### 结论

可以分块实现水合，首次加载可以异步加载数据，让一些不依赖数据的部分先展示先水合，
依赖于数据异步加载的可以后加载后水合

通过 Suspense 与 Lazy 分块，可以分单元逐步加载数据加快，性能更好，数据加载更快
