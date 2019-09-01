<template>
  <div>
    <table class="table table-sm table-striped table-bordered">
      <tr>
        <th>ID</th><th>Name</th><th>Price</th><th></th>
      </tr>
      <tbody>
      <tr v-for="p in products" :key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.name }}</td>
        <td>{{ p.price | currency }}</td>
        <td>
          <button class="btn btn-sm btn-primary"
                  @click="editProduct(p)">
            Edit
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button class="btn btn-primary"  @click="createNew">
        Create New
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
      products: []
  }),
  inject: ['eventBus'],
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    }
  },
  created () {
    this.eventBus.$on('finish', p => {
      this.products[p.id - 1].name = p.name
      this.products[p.id - 1].price = p.price
    })
  },
  methods: {
    createNew() {
    },
    editProduct(product) {
      this.eventBus.$emit('edit', product)
    }
  }
}
</script>
