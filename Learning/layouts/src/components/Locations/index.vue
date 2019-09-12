<template lang="pug">
  .row.justify-center
    .col-7
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
