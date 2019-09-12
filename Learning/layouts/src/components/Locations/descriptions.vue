<template lang="pug">
  .description
    .row.row.q-mb-none
      h6 Descriptions
    .row.q-pb-lg
      q-input.col(v-model="descriptions.text" autogrow type="text-area" outlined)
</template>

<script>
export default {
  data: () => ({
    descriptions: {
      text: ''
    }
  })
}
</script>
