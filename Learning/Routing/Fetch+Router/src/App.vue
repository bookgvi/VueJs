<template>
    <div id="app">
        <router-link to='/master/package.json'> JSON</router-link> |
        <router-link to='/master/package-lock.json'>Lock JSON</router-link>
        <router-view></router-view>
    </div>
</template>
