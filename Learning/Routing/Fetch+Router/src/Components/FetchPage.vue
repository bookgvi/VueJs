<template>
    <div id='example' ref='div'></div>
</template>

<script>
export default {
    data(){
        return {
            page: this.$route.params.page,
        }
    },
    watch: {
        '$route': 'fetchPage'
    },
    methods: {
        fetchPage() {
            fetch(`/src/html/${this.page}`,{
                method: 'GET'
            })
            .then(response => response.text())
            .then(html => this.$refs.div.innerHTML = html);
        },
    },
    mounted() {
        this.fetchPage();
    }
}
</script>
