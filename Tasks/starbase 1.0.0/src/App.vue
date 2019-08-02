<template>
    <div id="app" class='container'>
        <h3 class='mt-5'>{{title}}</h3>
        <div class="row">
            <Character 
                v-for='(item, index) in initalCharacters'
                :key='index'
                :id='item'
            />
        </div>
    </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
    name: 'app',
    data(){
        return {
            title: 'Generate your team',
            initalCharacters: [1, 13, 14],
        }
    },
    components: {
        Character
    }
}
</script>
