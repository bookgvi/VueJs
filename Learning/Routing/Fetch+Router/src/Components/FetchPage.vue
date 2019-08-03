<template>
    <div> {{page}}</div>
</template>

<script>
export default {
    data(){
        return {
            page: this.$route.params.fetch,
            variant: ['cities.json','package-lock.json'],
            url: 'https://raw.githubusercontent.com/smelukov/loftschool-example/master/package.json',
            url2: 'https://raw.githubusercontent.com/smelukov/loftschool-example/master/package-lock.json'
        }
    },
    watch: {
        '$route': 'fetchPage'
    },
    methods: {
        fetchPage() {
            this.page = this.$route.params.fetch;
            fetch(`https://raw.githubusercontent.com/smelukov/loftschool-example/master/${this.page}`, {
                method: 'GET'
            }).then(response => response.json())
              .then(json => this.page = json);
        }
    }
}
</script>
