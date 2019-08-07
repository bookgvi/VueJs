<template>
    <div  @click='switchItem'>
        <h3 class='card-title'>{{item.name}}</h3>
            <div v-for='(i, indx, k) in item'
            :key='indx'
            ><span class='card-text' v-if='k<6'>{{indx}}: {{i}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['origitem', 'type'],
    data() {
        return {
            id: 2,
            item: {}
        }
    },
    methods: {
        switchItem() {
            fetch(`https://swapi.co/api/${this.type}/${this.rndId()}`,{
                method: "GET"
            })
                .then(response => response.json())
                .then(json => this.item = json)
        },
        rndId() {
            return Math.floor(Math.random()*63)+1
        }
    },
    created() {
        this.item = this.origitem;
    }
}
</script>

