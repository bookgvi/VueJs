<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" exact active-class="active" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" exact active-class="active" to="/cars">
            <a class="nav-link">Cars</a>
          </router-link>
          <router-link tag="li" exact active-class="active" to="/car/3">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link tag="li" exact active-class="active" to="/car/4">
            <a class="nav-link">Car 4</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-top: 5rem;
  }
</style>
