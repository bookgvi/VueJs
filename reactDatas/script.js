var inputBlock = {
    props: {
        field_key: String,
        field_data: String,
    },
    template: `
        <div>
            <label for='input' class='label'>{{field_key}}</label>
        <input type='text' :value='field_data'
            @input='$emit("edit", $event.target.value)'
            @focus ='$emit("get_focus", field_key)'
        ><br>
        </div>
    `,
};
var reactiveBlock = {
    props: {
        field_data: String,
        status: Boolean,
    },
    template: `
        <div>
        <input type='text' :value='field_data' disabled='true'>
        </div>
    `,

};

const vm = new Vue({
    el: '#app',
    data: {
        field: '',
        syncStatus1: true,
        reactive: {Name: '', Surname: '', Age: '', City: ''},
        nonReactive: {Name: '', Surname: '', Age: '', City: ''},
    },
    components: {
        'input_data': inputBlock,
        'reactive_data': reactiveBlock,
    },
    methods: {
        edit: function(e){
            this.reactive[this.field] = e;
            if (this.syncStatus1) 
                this.nonReactive[this.field] = e;
        },
        get_focus: function(field){
            this.field = field;
        },
        sync: function(){
            this.syncStatus1 = !this.syncStatus1;
            if(this.syncStatus1){
                for(key in this.reactive)
                    this.nonReactive[key] = this.reactive[key];
            }
        },
    }
})