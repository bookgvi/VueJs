Vue.component('work-card',{
    props: {
        visible: Boolean,
        msg: String
    },
    template: `
        <div class="card">
            <div class="card__title">
                <h3>Подумать</h3>
                <span>Продавец</span>
            </div>
                <h3>
                <textarea :value='msg'
                    @input='$emit("comment", $event.target.value)' 
                    @focus.prevent='$emit("showbtn")' @blur.prevent='$emit("blurbtn")'
                                                    name="comment" placeholder="Комментарий">
                </textarea><br>
                <button v-if='visible'
                    @click='$emit("save")'
                >Сохранить</button>
                <button v-if='visible'
                    @click='$emit("cancel")'
                >Отменить</button>
                </h3>
        </div>        
    `
});

Vue.component('show-comments',{
    props: {
        comments:   Object,
        disabled:    Boolean,
        visible:   Boolean
    },
    template: `
        <div class="card__comments">
            <input type='text' :value='comments.title' :disabled='disabled' 
                @input='$emit("focus2",$event)' @focus='$emit("focus2",$event)' ></>

                <button v-if='visible'
                    @click='$emit("save2")'
                >Сохранить</button>

                <button v-if='visible'
                    @click='$emit("cancel2")'
                >Отменить</button>

            <br>
            <div class="card__info">
                <span class="card__info__author-style">{{comments.author}}</span>
                <span class="card__info__date-style">{{comments.date}}</span>
                <span   
                        @click="$emit('shtooltip',$event)"
                        class="card__info__modify-style">↓</span>
                </div>
        
        </div>
        `,
});

Vue.component('tool-tip',{
    props: ['coord'],
    template: `                
            <div class="tooltip" :style='coord' @mouseleave='$emit("hidett")'>
                <span class="tooltip_btn-edit-style" @click='$emit("edit")'>Редактировать</span>
                <span class="tooltip_btn-delete-style">Удалить</span>
            </div>
            `
});


const vm = new Vue({
    el: '.posts-manage',

    data: {
        showBtn: false,
        showBtn2: false,
        showTT: false,
        editTitle: true,
        coordTT: [{left: '100px'}, {top: '100px'}],

        editValue: '', ////////////////// Для сохранения/отмены редактирования
        msg: '',
        author: 'Иванов И. И.',
        posts:[
            {id:1, title:'Взят в работу', author: 'Иванов И. И.', date: new Date().toDateString()}
        ],
        id: 1,
    },
    methods: {
        ///////////////////////////////////// Сохранение/отмена нового коментария
        commentHandler: function(text){
            this.showBtn = true;
            this.msg = text;
        },
        hShowBtn:  function(){
            this.showBtn = true;
         },
        hBlurBtn:  function(){
            if(!this.msg) this.showBtn = false;
         },

         ////////////////////////////// Показать кнопки сохранени/отмены редактирования комментария
         hShowBtn2:  function(e){
            this.showBtn2 = true;
            this.editValue = e.target.value;
         },

        ////////////////////////////////// Сохраниние/отмена нового комментария
        hSave:  function(){                        
            if(!this.msg) return;
            this.id++;
            let newItem = {
                id: this.id,
                title:  this.msg,
                author: this.author,
                date:   new Date().toDateString()
            }
            this.posts.unshift(newItem);
            this.msg = '';
            this.showBtn = false
        },
        hCancel:    function(){
            if(!this.msg) return;
            this.msg = '';
            this.showBtn = false;
        },

        ////////////////////////////////// Сохранение/отмена после редактирования
        hSave2: function(){
            this.editTitle = true;
            this.showBtn2 = false;
        },

        hCancel2:    function(){
            this.editTitle = true;
            this.showBtn2 = false;
        },

        shTooltip:  function(e){
            this.showTT = !this.showTT;
            this.coordTT[0].left = e.target.getBoundingClientRect().left + e.target.offsetWidth + 'px';
            this.coordTT[1].top = e.target.getBoundingClientRect().top + e.target.offsetHeight + 'px';
        },
        hideTT: function(){
            this.showTT = false;
        },

        hEditTitle:  function(){
            this.editTitle = false;
            this.showTT = false;

        }
    
    }
});