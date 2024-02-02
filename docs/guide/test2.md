---
title: v-node-render2
---

# vue虚拟dom渲染组件[v-node-render]

## 主旨

通过该组件，在 vue 的 template 模板中可以使用 jsx 写法
![An image](/image.png)
[Home](/guide/test.md) 

::: warning 注意呀
这是一个警告
:::

### 基本使用

<demo-box title="基本使用">

<example-v-node-render-1 slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/example/v-node-render/1.vue

</div>

</demo-box>

## API

#### Props

<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>是否必传</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>node</td>
            <td>将传入的vnode输出到template中</td>
            <td>否</td>
            <td>Any</td>
            <td>——</td>
            <td>——</td>
        </tr>
    </tbody>
</table>
