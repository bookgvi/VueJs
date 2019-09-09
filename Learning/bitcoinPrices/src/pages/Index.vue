<template>
  <q-page>
   <div class="q-pa-xl">
     <q-card style="width: 250px;" class="text-center">
         <h6>{{ bitcoin.time.updated }}</h6>
       1BTS = ${{ bitcoin.bpi.USD.rate }} {{ bitcoin.bpi.USD.code }}
     </q-card>
   </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    bitcoin: 'a'
  }),
  async created () {
    this.bitcoin = await this.$http.get().then(resp => resp.data)
  }
}
</script>
