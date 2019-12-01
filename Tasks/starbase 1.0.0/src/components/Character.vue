<template>
    <div class='col-sm-4' @click='switchCharacter'>
    <div class="character-card">
        <div class="card-body">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Height: {{character.height}}cm</p>
            <p class="card-text">Mass: {{character.mass}}kg</p>
            <p class="card-text">Hair color: {{character.hair_color}}</p>
            <p class="card-text">Eye color: {{character.eye_color}}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            character: {}
        }
    },
    methods: {
        fetchCharacter(id){
            fetch(`https://swapi.co/api/people/${id}`,{
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => this.character = json)
        },
        switchCharacter(){
            let rndId = Math.floor(Math.random()*83)+1;
            this.fetchCharacter(rndId);
        }
    },
    created(){
        this.fetchCharacter(this.id);
    }
}
</script>
