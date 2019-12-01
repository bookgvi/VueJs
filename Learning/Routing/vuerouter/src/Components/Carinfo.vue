<template>
    <div class="">
      <h4>Car model: {{$route.query.name}}</h4>
      <h5>Year: {{year}}</h5>
    </div>
</template>

<script>
    export default {
        name: "Carinfo",
        computed: {
            year(){
                return this.$route.query.year
            }
        }
    }
</script>

<style scoped>

</style>
