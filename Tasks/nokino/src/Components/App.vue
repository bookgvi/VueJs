<template>
  <div id="app" class="container">
    <h2 class="mt-9">Holly, Vue</h2>
    <hr>
    <div class="">
      <button class="btn btn-dark mb-2" @click="fetchFilmsInfo(-1)" v-if="previousFilmTitle">{{previousFilmTitle}}</button>
      <button class="btn btn-dark mb-2" @click="fetchFilmsInfo(1)" v-if="nextFilmTitle">{{nextFilmTitle}}</button>
      <div class="">
        <img :src='filmPoster' alt="" >
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              baseImgSrc: 'https://image.tmdb.org/t/p/w500',
              filmInfo: '',
              nextFilmTitle: '',
              previousFilmTitle: '',
              filmPoster: '',
              filmCounter: -1,
          }
      },
        created() {
              this.fetchFilmsInfo(1);
          },
      methods: {
          fetchFilmsInfo(counter){
              console.log(counter, this.filmCounter)
              fetch('https://api.themoviedb.org/3/discover/movie?api_key=382fdc20a456036a67a5e56974cb5016',{
                  method: 'GET',
                  // mode: 'no-cors',
              })
                  .then(response => response.json())
                  .then(json => this.filmInfo = json.results)
                  .then(()=> {
                      this.filmPoster = this.baseImgSrc + this.filmInfo[this.filmCounter].poster_path;
                      this.nextFilmTitle = this.filmInfo[this.filmCounter+1].title;
                      this.previousFilmTitle = this.filmInfo[this.filmCounter-1].title;
                  })
                  .catch(()=>console.dir('...Catched load img error'));
              this.filmCounter+=counter;
          }
      }
  }
</script>
