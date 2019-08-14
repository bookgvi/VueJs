<template>
  <div class="col-md-3">
    <div class="card mb-2">
      <div class="card-body">
        <button
          @click="$emit('deleteThisCar', cardId)"
          class="close"
        >&times;</button>
        <h6 class="card-text">
          Model: {{ name }}
        </h6>
        <h6 class="card-text">
         Year: {{ year }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    year: String,
    cardId: Number
  }
}
</script>

<style scoped>
</style>
