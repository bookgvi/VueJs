import Axios from 'axios'

const baseUrl = 'http://localhost:3500/products/'

export class RestDataSource {
  async getProduct () {
    return (await Axios.get(baseUrl)).data
  }
  async saveProduct (product) {
    await Axios.post(baseUrl, product)
  }
  async updateProduct (product) {
    await Axios.put(baseUrl+product.is, product)
  }
  async deletProduct (product) {
    await Axios.delete(baseUrl+product.id, product)
  }
}
