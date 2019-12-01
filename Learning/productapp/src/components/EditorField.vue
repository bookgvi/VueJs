<template>
  <div class="form-group">
<!--    <label>{{ value ? `Enter ${ label }:` : `Default ${ label }:` }}</label>-->
    <label for="">{{ formattedLabel }}</label>
    <input
      v-model.number="value"
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
      formattedLabel: this.format(this.label),
    }
  },
  inject: {
    editingEventBus: 'editingEventBus',
    fields: 'fields',
    format: {
      from: 'sourceForLabel',
      default: () => (value) => `Default ${ value }:`
    }
  },
  created () {
   this.editingEventBus.$on("changes", this.changes)
  },
  watch: {
    value (newValue) {
      this.editingEventBus.$emit('complete', [this.label.toLowerCase(), newValue])
    }
  },
  methods: {
    changes (p) {
      this.value = p[this.label.toLowerCase()]
    }
  }
}
</script>

<style scoped>

</style>
