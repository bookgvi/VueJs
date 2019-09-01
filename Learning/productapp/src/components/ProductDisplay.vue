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
          <button @click="deleteProd(p)" class="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
      <tr v-if="products.length===0">
        <td colspan="5" class="text-center">No data</td>
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
// import Axios from 'axios'
// const baseUrl = 'http://localhost:3500/products/'
export default {
  data: () => ({
      products: []
  }),
  inject: ['eventBus', 'restDataSource'],
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    }
  },
  async created () {
    this.eventBus.$on('finish', p => {
      this.products[p.id - 1].name = p.name
      this.products[p.id - 1].price = p.price
    })
    // let data = (await Axios.get(baseUrl)).data
    // this.processProducts(data)
    this.processProducts(await this.restDataSource.getProduct())
  },
  methods: {
    createNew() {
    },
    async editProduct(product) {
      this.eventBus.$emit('edit', product)
    },
    processProducts (products) {
      this.products.splice(0)
      this.products.push(...products)
    },
    async deleteProd (p) {
      //await this.restDataSource.deleteProduct(p)
      this.products.splice(p.id - 1, 1)
    }
  }
}
</script>
