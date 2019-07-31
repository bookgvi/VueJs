Vue.component('add-post',{
    props: {
        newcomment: String,
        sh_addpost_btns: Boolean
    },
    template: `
        <div class='card__add-post'>
            <input type='text' placeholder='Написать комментарий' :value='newcomment'
                @input='$emit("write_post", $event.target.value)'
                @blur='$emit("blur_empty_post", $event.target.value)'   
            >
            <br>
            <div class='card__buttons' v-if='sh_addpost_btns'>
                <button class='card__post_button-style'
                    @click='$emit("add_post_btn_add")'
                >Сохранить</button>

                <button class='card__post_button-style'
                    @click='$emit("add_post_btn_cancel")'
                >Отмена</button>
            </div>
        </div>
    `
});

Vue.component('modify-post',{
    props: {
        id: Number,
        posts: Object,
        disable_comment_edit: Boolean,
        sh_editpost_btns: Boolean,
        showtt: Boolean,
        show_delete_menu: Boolean,
    },
    template: `
        <div class='card__modify-post'>
            <div class='card__modify-post_comment'>
                <input type=text :value='posts.comment' :disabled='disable_comment_edit'
                @input='$emit("edit_comment", $event.target.value)'
                >
                        <div class='card__buttons' v-if='sh_editpost_btns'>
                        <button class='card__post_button-style'
                            @click='$emit("confirm_comment_btn_change", id)'
                        >Сохранить</button>

                        <button class='card__post_button-style'
                            @click='$emit("cancel_comment_btn_change",id)'
                        >Отмена</button>
            </div>
                            
            

            </div>
            <div class='card__modify-post_other-data'>
                <span>{{posts.author}} </span><span> {{posts.date}}  </span>
                <span class='card__modify-post_edit'
                    @click='$emit("show_tooltip", id)'
                > v 
                    <div class="tooltip" v-if='showtt'
                        @mouseleave='$emit("hidett", id)'>
                    
                        <span class="tooltip_btn-edit-style" 
                            @click='$emit("allow_edit_comment",id)'
                        >Редактировать</span>
                        <span class="tooltip_btn-delete-style"
                            @click='$emit("show_delete_confirm_menu", id)'
                        >Удалить</span>
                    </div>
                </span>
            </div>
        </div>`
});

Vue.component('delete-menu',{
    props:{
        show_delete_menu: Boolean
    },
    template:
        `<div class="tooltip" v-if='show_delete_menu'>
        <button class='card__post_button-style'
            @click='$emit("delete_post")'
        >Удалить</button>

        <button class='card__post_button-style'
        @click='$emit("cancel_delete")'
        >Отмена</button>
        </div>
        `

});

const vm = new Vue({
    el: '.cards',
    data: {
        index: 0,
        
        show_delete_menu: false,
        showTT: [false,false],
        actualTT: 0,

        disable_comment_edit: [true, true],    //

        sh_addpost_btns: false,
        sh_editpost_btns: [false, false],

        author: 'John Doe',
        newComment: '',
        editComment: '',
        deleteCommentNumber: 0,
        id: 1,
        posts:[
            {id:0, comment: 'Взят в работу', author: 'Иванов', date: new Date().toTimeString()},
            {id:1, comment: 'Думаю', author: 'Иванов', date: new Date().toTimeString()}
        ]
    },
    methods: {
        write_post: function(value){
            this.sh_addpost_btns = true;
            this.newComment = value;
        },
        blur_empty_post: function(value){               //<!-- Скрыть кнопки, если поле пустое и потерян фокус-->
            if(!value) this.sh_addpost_btns = false;
        },
        /////////////////////////////////////////// Отмена введенного коментария
        add_post_btn_cancel: function(){        
            this.newComment = '';
            this.sh_addpost_btns = false;
        },
        /////////////////////////////////////////// Добавление новой записи
        add_post_btn_add: function(){
            this.id++;
            this.posts.unshift({id: this.id, comment: this.newComment, author: this.author, date: new Date().toTimeString()});
            this.newComment='';
            this.disable_comment_edit.unshift(true);        // Для независимого редактирования комментария
            this.sh_addpost_btns = false;
            this.sh_editpost_btns.unshift(false);
            this.showTT.unshift(false);
        },
        ////////////////////////////////////////// Показать/скрыть MENU редактирования коментария
        show_tooltip: function(postNumber){
            this.showTT = [false];
            Vue.set(this.showTT, postNumber, true);
        },
        hideTT: function(postNumber){
            Vue.set(this.showTT, postNumber, false);
        },

        //////////////////////////////////////////// Разрешаем редактирование поля ввода
        allow_edit_comment: function(postNumber){
            Vue.set(this.disable_comment_edit, postNumber, !this.disable_comment_edit[postNumber]);
            Vue.set(this.sh_editpost_btns, postNumber, true);

        },

        //////////////////////////////////////// Вносим изменения в выбраный коментарий (показываем кнопки!)
        edit_comment: function(e){
            this.editComment = e;
        },
        ////////////////////////////////////// Сохраняем изменения
        confirm_comment_btn_change: function(postNumber){
            this.posts[postNumber].date = new Date().toTimeString();
            this.posts[postNumber].comment = this.editComment;

            Vue.set(this.sh_editpost_btns, postNumber, false);
            Vue.set(this.disable_comment_edit, postNumber, true);

        },
        ////////////////////////////////////// Отменяем изменения
        cancel_comment_btn_change: function(postNumber){
            this.editComment = '';
            Vue.set(this.sh_editpost_btns, postNumber, false);
            Vue.set(this.disable_comment_edit, postNumber, true);
        },
        ////////////////////////////////////////////// Подготовка удаления записи
        show_delete_confirm_menu: function(postNumber){
            this.deleteCommentNumber = postNumber;
            this.show_delete_menu = true;
        },
        /////////////////////////////////////////// DELETE
        delete_post: function(){
            this.posts.splice(this.deleteCommentNumber,1);
            this.disable_comment_edit.splice(this.deleteCommentNumber,1);
            this.sh_editpost_btns.splice(this.deleteCommentNumber,1);
            this.showTT.splice(this.deleteCommentNumber,1);

            this.show_delete_menu = false;
        },
        //////////////////////////////////////// Cancel Delete
        cancel_delete: function(){
            this.deleteCommentNumber = '';
            this.show_delete_menu = false;
        }
    }
});