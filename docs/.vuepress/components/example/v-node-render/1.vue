<template>
  <v-node-render :node="render()" />
</template>

<script>
export default {
  name: 'example1',
  data() { 
    return {
      render:() => {
        return <div>自定义渲染</div>
      }
    } 
  },
  methods: {
  }
}
</script>

