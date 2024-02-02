<script>
export default {
  name: 'VNodeRender',
  abstract: true,
  props: ['node'],
  render() {
    return this.node
  }
}
</script>
