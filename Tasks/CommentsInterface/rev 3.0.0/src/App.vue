<template>
    <div id="app">
    <div class="card" style="width: 25rem;">
        <div class="card-body">
            <div class="card-body-titles">
                <h5 class="card-title text-success">Подумать</h5>
                <div class="card-subtitle mb-2 text-success">Продавец</div>
            </div>
            <newComment
                @addComment='addComment'
             />
            <manageComments 
                v-for='(item, index) in posts'
                :key='index'
                :posts='item'
                :index='index'
                @deletePost='deletePost'
                @newComment='newComment'
                @saveComment='saveComment'
            />
        </div>
    </div>
    </div>
</template>

<script>
import Vue from 'vue';
import newComment from './components/newComment.vue'
import manageComments from './components/manageComments.vue'

export default {
    components: {
        newComment,
        manageComments,
        
    },
    data(){
        return {
            posts: [
                {comment: 'Взят в работу', author: 'Бобик', date: new Date(Date.now()).toLocaleString()}
            ],
            id: 0,
            newCommen: '',
        }
    },
    methods: {
        addComment(value){
            this.posts.unshift({comment: value, author: "Бобик", date: new Date(Date.now()).toLocaleString()});
        },
        deletePost(index){
            this.posts.splice(index,1);
        },
        newComment(value){
            this.newCommen = value;
        },
        saveComment(value){
            if(!this.newCommen) return;
            Vue.set(this.posts[value], 'comment', this.newCommen);
            this.newCommen = '';
        },
    }
}
</script>

