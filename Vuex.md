> vue init webpack-simple jokester
> cd jokester
> npm install

> npm install vuex --save

> npm run dev

/////////////////////////////////////// main.js
import Vue from 'vue'
import App from './Components/App.vue'

new Vue({
    el: '#app',
    render: h => h(App),
});

/////////////////////////////////////// src/Components/App.vue
<template>
    <div id='app'>
    {{Get jokes?}}
    </div>
</template>

//////////////////////////// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);  // Connect the library Vuex

const state = {  // Define the application global state
    jokes: []
}

export default new Vuex.Store({  // Set global application store!!!
    state
});

//////////////////////// main.js
import Vue from 'vue'
import App from './Components/App.vue'

import Store from ./store     // Its enouph to import Global store ('index' files are defaults, and import automaticaly if nothing is wrote)

new Vue({
    el: '#app',
    store: Store,           // (*)
    render: h=>h(App),
});

////////////////// App.vue
<template>
    <div id='app'>
    {{Get jokes?}} {{store$.state}}   // (*)
    </div>
</template>
