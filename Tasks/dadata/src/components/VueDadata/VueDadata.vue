<template lang="pug">
  .vuedadata
    .row.q-pb-lg
      h5 Vue Components
    .row.q-pb-lg
        VueSuggestion(
          :model.sync="city"
          :coordinates.sync="coordinates"
          :placeholder="'Начните вводить'"
          class="form-control"
          :options="suggestionOptions"
        )

</template>

<script>
import VueSuggestion from 'vue-suggestions'
export default {
  components: {
    VueSuggestion
  },
  data () {
    return {
      city: '',
      coordinates: {
        latitude: '',
        longitude: ''
      },
      suggestionOptions: {
        // @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=207454318
        token: 'daa0567fa0fb73ae73ae7e1e389dfefe52ef35b9',
        type: 'ADDRESS',
        scrollOnFocus: false,
        triggerSelectOnBlur: false,
        triggerSelectOnEnter: false,
        addon: 'none',
        // @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=207454320
        onSelect (suggestion) {
        }
      }
    }
  }
}
</script>

<style>
</style>
