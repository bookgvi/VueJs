<template lang="pug">
  .row.justify-center
    .col-6.justify-center
      datas
      descriptions
      detail
</template>

<script>
import datas from './datas'
import descriptions from './descriptions'
import detail from './detail'
export default {
  components: {
    datas,
    descriptions,
    detail
  }
}
</script>

<style scoped>

</style>
