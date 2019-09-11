<template lang="pug">
  q-page.q-ma-xl
    .row
      q-input.q-mr-sm.justify-center(v-model="str" outlined dense style="width: 500px")
        template(#append)
          div {{ wCount }}
    .row
      q-chip.color-primary Words count = {{ wCount }}
      q-chip.color-primary {{ wordIterator }}
</template>

<style>
</style>

<script>
import words from '../controllers/words'
export default {
  data: () => ({
    str: '',
    wordsInStr: ''
  }),
  computed: {
    wCount () {
      return words.wordsCount(this.str).length
    },
    wordIterator () {
      let wwordsInStr = ''
      let iterator = words.getWords(words.wordsCount(this.str))
      for (let word of iterator) {
        wwordsInStr += word + ' '
      }
      return wwordsInStr
    }
  }
}
</script>
