Vue.component('app-day',{
    props: ['day'],
    template: '<td>{{day}}</td>'
});
let vm = new Vue({
    el: '.calendar',
    data: {
        now: new Date(),
        daysCount: 31,
        curMonth: 0,   
        firstDay: 0,  
        monthArr: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        weekDaysArr: [' Mon ',' Tue ',' Wed ',' Thu ',' Fri ',' Sat ',' Sun ']
    },
    created: function(){
        let now = new Date();
        this.curMonth = now.getMonth();


    },

    computed: {
        month: function(){  //Current Month is...
            document.title = this.monthArr[this.curMonth];
            return document.title;
        },

        days: function(){  // Form array with days in month
            let days = [[],[],[],[],[],[]];

            var i,j;
            this.getFirst();
            this.daysCountM();
            for (i=0; i<7-this.firstDay; i++)
                days[0][this.firstDay+i] = i+1;

            for(let k=1; k<=days.length; k++){
                for(j=i; j<i+7 && j < this.daysCount;j++){
                    days[k].push(j+1);
                }
                [i,j] = [j,i]
            }
            return days;
        }
    },
    methods: {  // What weekday was at 'CurrentMonth, 1'
        getFirst: function(){
            this.firstDay = new Date(this.now.getFullYear(), this.curMonth, 00);
            this.firstDay = this.firstDay.getDay();
            return this.firstDay;
        },
        daysCountM: function(){
            let curMonth = new Date(this.now.getFullYear(), this.curMonth, 01);
            let nextMonth = new Date(this.now.getFullYear(), this.curMonth+1, 01);
            this.daysCount = (nextMonth - curMonth)/1000/3600/24;
        },
        changeMonthF: function(e){
            if(this.curMonth<11) this.curMonth++;
        },        
        changeMonthB: function(e){
            if(this.curMonth>0) this.curMonth--;
        },

    }
});