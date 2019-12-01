<template>
    <div class="col-md-4">
        <div class="card-body" @click='randomHero'>
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Height: {{character.height}}cm</p>
            <p class="card-text">Mass: {{character.mass}}kg</p>
            <p class="card-text">Hair color: {{character.hair_color}}</p>
            <p class="card-text">Eye color: {{character.eye_color}}</p>
            <p class="card-text">Home planet: {{planet.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            character: '',
            planet: ''
        }
    },
    methods: {
        fetchCharacter(id){
            let promise = new Promise((resolve, reject)=>{
                this.getChar(id); 
                resolve();
            })
                .then(()=>{this.getPlanet(id)})
                .catch();
        },
        getChar(id){
            fetch(`https://swapi.co/api/people/${id}`,{
                    method: 'GET'
                })
                .then(response => response.json())
                .then(json => this.character = json)
        },
        getPlanet(id){
            fetch(`https://swapi.co/api/planets/${id}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => this.planet = json)
        },
        randomHero(){
            let randId = Math.floor(Math.random()*83)+1;
            this.fetchCharacter(randId);
        }
    },
    created() {
        this.fetchCharacter(this.id);
    }
}
</script>

