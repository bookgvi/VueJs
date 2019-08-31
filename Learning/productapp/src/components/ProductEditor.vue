<template>
  <div class="form">
    <editor-field label="ID" />
    <editor-field label="Name" />
    <editor-field label="Price" />
    <div class="text-center">
      <button @click="save" class="btn btn-primary">{{ isBlocked ? 'Save' : 'Create' }}</button>
      <button @click="cancel" class="btn btn-secondary">Cancel</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import EditorField from "./EditorField";
export default {
  data: () => ({
    localBus: new Vue(),
    hasBlocked: true,
    color: {
      bg: 'bg-secondary',
      text: 'text-light',
    },
    product: {
      id: 0,
      name: '',
      price: 0
    }
  }),
  components: {
    EditorField
  },
  inject: {
    eventBus: 'eventBus',
  },
  provide: function () {
      return {
        isBlocked: this.hasBlocked,
        color: this.color,
        editingEventBus: this.localBus,
        sourceForLabel: (value) => `Enter ${ value }:`
      }
  },
  mounted () {
    this.eventBus.$on('edit', this.startEdit)
    this.eventBus.$on('create', this.startCreate)
  },
  methods: {
    cancel (predicate) {
      this.hasBlocked = true
      this.product = {}
      this.color.bg = 'bg-secondary'
      this.color.text = 'text-light'
    },
    save () {
      this.eventBus.$emit('complete', this.product)
      this.hasBlocked = true
    },
    startEdit (p) {
      this.color.bg = 'bg-light'
      this.color.text = 'text-primary'
      this.hasBlocked = false
      this.product.id = p.id
      this.product.name = p.name
      this.product.price = p.price
    },
    startCreate () {}
  }
}
</script>

<style scoped>

</style>
