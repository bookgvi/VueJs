<template>
<div class='container'>
    <div class="row">
        <items class='card col-sm-4' style='width: 10rem;'
            v-for='(item, index) in data'
            :key='index'
            :origitem='item'
            :type='type'
        />
    </div>
</div>
</template>

<script>
import items from './items.vue'
export default {
    data(){
        return {
            type: this.$route.params.type,
            nums: [1,14,15],
            data: []
        }
    },
    components: {
        items
    },
    watch: {
        '$route': 'fetchCharacter'
    },
    methods: {
        fetchCharacter() {
            this.type = this.$route.params.type;
            this.data=[];
            for(let i in this.nums){
                fetch(`https://swapi.co/api/${this.type}/${this.nums[i]}`, {
                    methods: 'GET'
                    })
                        .then(response => response.json())
                        .then(json => this.data.push(json))
                }
            },
        },
    created() {
        this.fetchCharacter()
    }
}
</script>

<style>
*{
    text-align: center;
}
</style>


