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
import EditorField from "./EditorField"
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
        sourceForLabel: (value) => `Enter ${ value }:`,
        editingEventBus: this.localBus
      }
  },
  created () {
    this.eventBus.$on('edit', this.startEdit)
    this.eventBus.$on('create', this.startCreate)
    this.localBus.$on('complete', (newVal) => {
      if (newVal[0] !== 'id') {
        this.product[newVal[0]] = newVal[1]
      }
    })
  },
  watch: {
    product (newVal) {
      this.localBus.$emit('changes', newVal)
    }
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
    cancel () {
      this.product = {}
      this.fieldsBlock()
    },
    save () {
      if (!this.fields.isBlocked) {
        this.eventBus.$emit('finish', this.product)
        this.product = {
          id: '',
          name: '',
          price: ''
        }
        this.fieldsBlock()
      }
    },
    startEdit (p) {
      this.fieldsEditable()
      this.product = {
        id: p.id,
        name: p.name,
        price: p.price
      }
    },
    startCreate () {}
  }
}
</script>

<style scoped>

</style>
