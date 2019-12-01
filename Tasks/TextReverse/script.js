const vm = new Vue({
    el: '#app',
    data: {
        msg: 'Holly Vue'
    },
    methods: {
        reverse: function(){
            this.msg=this.msg.split('').reverse().join('');
        }
    }
});