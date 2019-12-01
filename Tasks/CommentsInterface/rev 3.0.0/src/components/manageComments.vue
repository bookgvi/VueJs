<template>
    <div class='container'>
        <input type='text'  id='edit' class="card-subtitle col-sm-12" :value='posts.comment' :disabled='canEdit' ref='inp'
            @input='newComment'            
        >
        <div class="form-btns" v-if='canEditBtns'>
            <button class="btn btn-info btn-sm" style='width: 100px'
                @click='saveComment' 
            >Сохранить</button>
            <button class="btn btn-outline-danger btn-sm" style='width: 100px'
                @click='cancel'
            >Отмена</button>
        </div>


        <div class="row">
            <div class="card-text text-muted col-sm-10">{{posts.author}} {{posts.date}}</div>
            <button class="sub-menu col-sm-1"
                @click='showSubmenu' 
                >&#128504;
            <div id='edit_delete' class="col-10" v-if='subMenu'>
                <div class="btn btn-info btn-sm" style='width: 120px'
                    @click='canEditPost'
                >Редактировать</div>
                <div class="btn btn-outline-danger btn-sm" style='width: 120px'
                    @click='showConfirm'
                > Удалить </div>
            </div>

            </button>
        </div>


        <div class="sub-menu" v-if='confirm'>
            <div class="btn btn-info btn-sm" style='width: 120px'
                @click='deletePost'
            >Подтвердить</div>
            <div class="btn btn-outline-danger btn-sm" style='width: 120px'
                @click='cancel'
            > Отменить </div>
        </div>


    </div>
</template>

<script>
export default {
    props: ['posts', 'index'],
    data(){
        return {
            subMenu: false,
            confirm: false,
            canEdit: true,
            canEditBtns: false,
        }
    },
    methods: {
        showSubmenu(){
            this.subMenu = !this.subMenu;
        },
        showConfirm(){
            this.confirm=!this.confirm;
        },
        deletePost(){
            this.$emit('deletePost',this.index);
            this.confirm = false;
        },
        cancel(){
            this.confirm = false;
            this.canEdit = true;
            this.canEditBtns = false;
        },

        canEditPost(){
            this.canEdit = false;
            this.canEditBtns = true;
            this.$nextTick(() => this.$refs.inp.focus())
        },
        saveComment() {
            this.$emit('saveComment',this.index);
            this.cancel();
        },
        newComment(){
            let value = event.target.value;
            if(!value) value=this.posts.comment;
            this.$emit('newComment', value)
        },

    }
}
</script>

