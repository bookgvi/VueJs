<template>
    <div id="app" class="container">
        <h2 class="mt-5">{{title}}</h2>
        <div class="row">
        <Character
            v-for='(item, index) in charId'
            :key='index'
            :id='item'
        ></Character>
        </div>
    </div>
</template>

<script>
import Character from './character/Character.vue'

export default {
    name: 'app',
    data() {
        return {
            title: 'Chosoe your hero',
            charId: ['1', '13', '14']
        }
    },
    components: {
        Character
    }
}
</script>

