<template>
    <div class="form">
    <div class="form-group">
            <input class='form-add_new mt-2' :value='comment' type="text" placeholder='Написать комментарий'
                @focus='hide=true' @blur='blur'
                @input='inputComment'
            >
    </div>
    <div class="form-group" >
        <div class="form-btns" v-if='hide'>
            <button class="btn btn-info btn-sm" style='width: 100px' 
                @click='addComment'
            >Сохранить</button>
            <button class="btn btn-outline-danger btn-sm" style='width: 100px'
                @click='cancelComment'
            >Отмена</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hide: false,
            comment: ''
        }
    },
    methods: {
        blur(){
            if (!this.comment)
            this.hide=false
        },
        inputComment(e){
            this.comment = e.target.value;
        },
        addComment(){
            this.$emit('addComment',this.comment);
            this.comment='';
            this.blur();
        },
        cancelComment(){
            this.comment='';
            this.blur();
        },
    }
}
</script>