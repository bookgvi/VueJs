<template>
<div class="col-sm-4">
    <div class='card-body'>
        <h4 class="card-title">{{item.name}}</h4>
        <div class="card-text" v-for='(i, key, index) in item' :key='index'>
            <div v-if='index<5'>
                {{key.split('_').join(' ')[0].toUpperCase()+key.split('_').join(' ').slice(1)}}: {{i}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['item'],
}
</script>

