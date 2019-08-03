<template>
<div class="contaner">
<div class="row">
        <Item 
            v-for='(i, index) in items'
            :key='index'
            :item='i'
        />
    </div>
</div>
</template>

<script>
import Item from './Items.vue'
export default {
    data(){
        return {
            type: this.$route.params.type,
            items: [],
        }
    },
    components: {
        Item
    },
    watch: {
        '$route': 'fetchItems' 
    },
    methods: {
        fetchItems(){
            this.items = [];
            let initials = [1, 13, 14];
            this.type = this.$route.params.type;

            for(let i in initials){
                fetch(`https://swapi.co/api/${this.type}/${initials[i]}`, {
                    method: 'GET'
                }).then(response => response.json())
                  .then(json => this.items.push(json))
            }
        }
    },
    created() {
        this.fetchItems();
    }

}
</script>

