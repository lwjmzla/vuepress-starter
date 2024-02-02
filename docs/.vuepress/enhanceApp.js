import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DemoBox from '@laomao800/vue-demo-box'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  console.log(options)
  console.log(siteData)
  console.log(isServer)
  if (!isServer) {
    Vue.use(ElementUI);
    Vue.use(DemoBox)
    // await import('element-ui').then(ElementUI => {
    //   Vue.use(ElementUI);
    // });
    // window.global = window
    return import('../../src/index')
      .then((module) => {
        Object.entries(module).forEach(([name, component]) => {
          Vue.use(component)
        })
      })
      .catch((e) => {
        console.error(e, 'enhanceApp')
      })
  }
}
