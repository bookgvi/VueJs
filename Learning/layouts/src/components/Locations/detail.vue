<template lang="pug">
  .detail
    .row
      h6(@click="isImg1 = isImg2 = isImg3 = true" class="reset") Details
    .row.q-pb-lg
      q-img.col.q-mr-xs(v-if="isImg1" src="https://placeimg.com/500/300/nature?t=")
        q-btn.absolute-top-right(@click="isImg1 = !isImg1" icon="cancel" flat rounded dense)
      q-img.col.q-mr-xs(v-if="isImg2" src="https://placeimg.com/500/300/nature?t=")
        q-btn.absolute-top-right(@click="isImg2 = !isImg2" icon="cancel" flat rounded dense)
      q-img.col(v-if="isImg3" src="https://placeimg.com/500/300/nature?t=")
        q-btn.absolute-top-right(@click="isImg3 = !isImg3" icon="cancel" flat rounded dense)
    .row
</template>

<script>
export default {
  data: () => ({
    isImg1: true,
    isImg2: true,
    isImg3: true
  })
}
</script>

<style scoped>
  .reset {
    cursor: pointer;
  }
</style>
