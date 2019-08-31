<template>
  <div class="form-group">
<!--    <label>{{ value ? `Enter ${ label }:` : `Default ${ label }:` }}</label>-->
    <label for="">{{ formattedLabel }}</label>
    <input
      v-model="value"
      :disabled="fields.isBlocked"
      :class="[fields.bg, fields.text]"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  props: ['label'],
  data() {
    return {
      value: '',
      formattedLabel: this.format(this.label)
    }
  },
  inject: {
    fields: 'fields',
    format: {
      from: 'sourceForLabel',
      default: () => (value) => `Default ${ value }:`
    },
  },
}
</script>

<style scoped>

</style>
