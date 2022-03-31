### react-ssr

renderToString ssr 实现 可见
关键 同构 水合

1. 必须为所有组件加载数据
2. 必须加载所以 JS
3. 必须完成所有水合才能操作

关键路径：获取到页面数据->渲染 html->加载代码（js 等）-> 水合->交互

水合完成是不能做任何操作的,

### react18 ssr demo

见 react18ssr 目录
