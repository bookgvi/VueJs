Vue.component('my-clock', {
    props: ['val'],
    template: '<span class="time">{{val}}</span>'
});

const vm = new Vue({
    el: '.clock',
    data: {
        now: new Date(),
        hours: 10,
        minutes: 20,
        seconds: 30,
        IntId: 0,
        bool: 1,
    },
    computed: {
        clock: function(){
            this.hours = this.now.getHours();
            this.minutes = this.now.getMinutes();
            this.seconds = this.now.getSeconds();
            if(this.hours<10) this.hours = '0' + this.hours;
            if(this.minutes<10) this.minutes = '0' + this.minutes;
            if(this.seconds<10) this.seconds = '0' + this.seconds;

            let clock = this.hours + ':' + this.minutes + ':' + this.seconds;
            return clock;
        }
    },
    methods: {
        startClock: function(){
            this.bool = !this.bool;

            this.bool ? clearInterval(this.IntId) : this.IntId = setInterval(()=>{this.now = new Date();},0);
            
            
        }
    }
    
});