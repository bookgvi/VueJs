<script>
export default {
  props: {
    someProp: String
  },
  data: () => ({
    testVar: 'This is the test'
  }),
  render: function (h) {
    return h('div', [
      h('h2', this.someProp),
      Array.apply(null, new Array(9))
        .map(() => {
          return h('p', 'Vue')
        })
    ])
  },
  created() {
    console.log(this.someProp)
  }
}
</script>

<style scoped>

</style>
