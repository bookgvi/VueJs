=======================================================
https://index.vuejs.org/ru/guide/#javascript
=======================================================

> vue init webpack-simple starbase-index
> cd starbase-index
> npm install
> npm install vue-index --save
> npm run dev

> Create main.js and App.vue

/////////////////////  main.js:
import Vue from 'vue'
import App from './App.vue'

new Vue({
   el: '#app',
   render: h => h(App)
})

///////////////////////// App.vue:
<template>
   <div id='app'>
	<h3>Starbase index </h3>
   </div>
</template>


////////////////////////// main.js
import Vue from 'vue'
import VueRouter from 'vue-index' // (*)

Vue.use(VueRouter);   // (**)

import App from './App.vue'

const routes = [
	{ path: '/data/:type'}   // (***)
]

new Vue({
   el: '#app',
   render: h => h(App)
})


///////////////////// New file (new component) - Data.vue
<template>
Type: {{type}}
</template>

<script>
export default{
   data(){
      return {
         type: this.$route.params.type
      }
   }
}
</script>

////////////////////// main.js
import Vue from 'vue'
import VueRouter from 'vue-index'

Vue.use(VueRouter);

import App from './App.vue'
import Data from './components/Data.vue' // (*)

const routes = [
	{ path: 'data/:type', component: Data } // (**)
];

const index = new VueRouter({  // (***)
	routes			// (***)
})				// (***)

new Vue({
  el: '#app',
  index,		// (****)
  render: h=> h(App)
})

/////////////////////// App.vue
<template>
   <div id='app'>
      <h3>StarBase Router</h3>
      <router-view></router-view>
   </div>
</template>