<template lang="pug">
  .datas
    .row.q-mb-none
      h6 Studio descriptions
    .row.q-pb-sm
      span Name
    .row.q-pb-lg
      q-input.col(v-model="locData.name" outlined dense)
    .row.q-pb-sm
      span.col.q-pr-xs Phone
      span.col Mail
    .row.q-pb-lg
      q-input.col.q-pr-xs(v-model="locData.phone" type="tel" outlined dense)
      q-input.col(v-model="locData.mail" type="email" outlined dense)
    .row.q-pb-lg
      q-checkbox(v-model="locData.isChecked" label="Hide this studio" dense)
</template>

<script>
export default {
  data: () => ({
    locData: {
      name: 'Some studio name',
      phone: '+7 900 800 00 00',
      mail: 'mail@mail.ru',
      isChecked: false
    }
  })
}
</script>
