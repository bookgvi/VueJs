<template>
  <div class="form">
    <editor-field label="ID" />
    <editor-field label="Name" />
    <editor-field label="Price" />
    <div class="text-center">
      <button @click="save" class="btn btn-primary">{{ fields.isBlocked ? 'Create' : 'Save' }}</button>
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
    fields: {
      bg: 'bg-secondary',
      text: 'text-light',
      isBlocked: 'true'
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
        fields: this.fields,
        editingEventBus: this.localBus,
        sourceForLabel: (value) => `Enter ${ value }:`
      }
  },
  mounted () {
    this.eventBus.$on('edit', this.startEdit)
    this.eventBus.$on('create', this.startCreate)
  },
  methods: {
    fieldsBlock () {
      this.fields.isBlocked = true
      this.fields.bg = 'bg-secondary'
      this.fields.text = 'text-light'
    },
    fieldsEditable () {
      this.fields.bg = 'bg-light'
      this.fields.text = 'text-primary'
      this.fields.isBlocked = false
    },
    cancel (predicate) {
      this.product = {}
      this.fieldsBlock()
    },
    save () {
      this.eventBus.$emit('complete', this.product)
      this.fieldsBlock()
    },
    startEdit (p) {
      this.fieldsEditable()
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
