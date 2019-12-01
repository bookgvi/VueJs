<template>
    <div id="app">
        <h3> Starbase index</h3>
        <h4 class='links'>
            <router-link to='/data/people'>To person</router-link> |
            <router-link to='/data/planets'>To planet</router-link>
        </h4>
        <router-view></router-view>
    </div>
</template>
