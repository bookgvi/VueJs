<template>
  <div id="app">
    Holly Vuex! {{$store.state.counter}}
    <button @click="$store.commit('INCREMENT','+')">+</button>
    <button @click="$store.commit('INCREMENT', '-')">-</button>
    <button @click="$store.commit('INCREMENT', -2)">-2</button>
    <button @click="$store.commit('INCREMENT', 3)">+3</button>
    <button @click="$store.commit('INCREMENT', 0-$store.state.counter)">reset</button>
  </div>
</template>
