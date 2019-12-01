<template>
  <div class="mb-3">
    <button class="btn btn-danger"
            @click="$emit('confirm')"
    >Confirm</button>
    <button class="btn btn-primary"
            @click="$emit('cancel')"
    >Cancel</button>
  </div>
</template>

<style scoped>
  button {
    width: 35%;
  }

</style>
