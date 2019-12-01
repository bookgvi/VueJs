<template>
    <div class="routes">
        Type: {{type}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            type: this.$route.params.type
        }
    },
    create(){},
    watch: {
        '$route': 'showPage'
    },
    methods: {
        showPage() {
            this.type = this.$route.params.type;
        }
    },
}
</script>

