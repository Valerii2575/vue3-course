<template>
    <div class="app">
        <div class="title">
            <h1>My Blog</h1>
            <my-button @click="showDialog = true">Add Post</my-button>
        </div>
        <div class="container">            
            <h4>Post List</h4>
            <my-button @click="fetchPosts">Fetch Posts</my-button>
            <my-dialog v-model:show="showDialog">
            <post-form
            @add-post="handleAddPost">
        </post-form>
        </my-dialog>       
        
        </div>``
        <post-list 
            :posts="posts"
            @remove="removePost"
            v-if="!isPostLoading"
            >
        </post-list>
        <div v-else>
            <p>Posts loading....</p>
        </div>
    </div>
   
</template>

<script>
import  PostList from "./components/PostList.vue";
import  PostForm from "./components/PostForm.vue";
//import axios from 'axios';
export default {
    name: 'App',
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
            posts: [],
            showDialog: false,
            isPostLoading: false
        }
    },
    mounted() {
        this.fetchPosts();
    },
    methods: {
        handleAddPost(post) {
            const lastId = this.posts.length ? this.posts[this.posts.length - 1].id : 0;
            post.id = lastId + 1;
            this.posts.push(post);
            this.showDialog = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    const data = await response.json();
                    this.posts = data.slice(0, 10).map(post => ({
                        id: post.id,
                        title: post.title,
                        description: post.body
                    }));
                
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            finally {
                this.isPostLoading = false;
            }
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.title {
    text-align: center;
    margin: 20px 0;
}
.title h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
}

.container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10vh;
}
.container h4 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
}
</style>