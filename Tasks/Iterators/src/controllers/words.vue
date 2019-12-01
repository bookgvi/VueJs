<script>
export default {
  wordsCount (str) {
    return str.split(' ').filter(item => item.length > 0)
  },
  getWords (str) {
    return str[Symbol.iterator]()
  }
}
</script>
