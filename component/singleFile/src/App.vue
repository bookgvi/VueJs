<template>
<div class="hello">
    <span>{{msg}}</span>
</div>
</template>

<script>
export default {
    name: 'app',
    data: function(){
        return {
            msg: 'Holly Vue!'
        }
    }, 
}
</script>

<style>
.hello{
    font-family: Verdana;
    color: navy;
}
</style>


