<template>
  <q-page>
   <div class="row q-pa-xl">
     <q-card style="width: 290px;" class="text-center q-pa-lg">
         <h6 class="q-ma-none">BTS/USD</h6>
       1BTS = ${{ bitcoin.bpi.USD.rate }} {{ bitcoin.bpi.USD.code }}
     </q-card>
     <q-space></q-space>
     <q-card style="width: 290px;" class="text-center q-pa-lg">
         <h6 class="q-ma-none">BTS/EUR</h6>
       1BTS = ${{ bitcoin.bpi.EUR.rate }} {{ bitcoin.bpi.EUR.code }}
     </q-card>
   </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      bitcoin: ''
    }
  },
  async created () {
    this.bitcoin = await this.$http.get().then(resp => resp.data)
  }
}
</script>
