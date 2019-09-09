<template>
  <q-page class="flex flex-center">
    <q-table
      :columns="columns"
      :data="data"
    >
    </q-table>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    columns: [
      { name: 'id', label: 'number', field: 'id' },
      { name: 'name', label: 'name', field: 'name' }
    ],
    data: [{
      id: 1,
      name: 'WTF'
    }]
  })
}
</script>
