
// const packageVersion = process.env.VERSION || package.version
// const packageName = package.packageName || 'yl-ui-vue2'
const docsOuput = 'docs-dist'

const commonSidebar = [
  '/',
  {
    title: '开发教程',
    name: 'guide',
    collapsable: false,
    children: [
      '/guide/button',
      '/guide/test',
      '/guide/test2',
    ]
  },
]

module.exports = {
  base: '/',
  dest: docsOuput, // 设置文档输出路径
  title: `组件库`,
  description: '云联科技中后台组件库',
  plugins: ['demo-container'],
  themeConfig: {
    // 头部导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'GitLab',
        link: 'http://8.134.77.199:18081/cmn-project-web/yl-ui-vue2'
      }
    ],
    // 左侧导航
    sidebar: commonSidebar
  }
}
