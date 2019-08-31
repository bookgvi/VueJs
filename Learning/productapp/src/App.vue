<template>
  <div id="app" class="container-fluid">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <div class="row mt-5">
      <div class="col-sm-8">
        <product-display />
      </div>
      <div class="col-sm">
        <product-editor />
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
  import ProductDisplay from "./components/ProductDisplay"
  import ProductEditor from "./components/ProductEditor";
export default {
  provide: {
    fields: {
      bg: 'bg-info',
      text: 'text-light',
      isBlocked: 'true'
    }
  },
  components: {
    ProductDisplay,
    ProductEditor
  }
}
</script>

<style>
</style>
