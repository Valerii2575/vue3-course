<template>
    <div class="app">
        <div class="title">
            <h1>My Blog</h1>
            <MyInput placeholder="Search..."
                    v-model="searchQuery"></MyInput>

            <div class="app__btns">
                <my-button @click="showDialog = true">Add Post</my-button>
                <mySelect v-model="selectedSort"
                            :options="sortOptions"></mySelect>
            </div>
            
        </div>
        <div class="container">            
            <h4>Post List</h4>
            <my-button @click="fetchPosts">Fetch Posts</my-button>
            <my-dialog v-model:show="showDialog">
            <post-form
            @add-post="handleAddPost">
        </post-form>
        </my-dialog>       
        
        </div>
        <post-list 
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostLoading"
            >
        </post-list>
        <div v-else>
            <p>Posts loading....</p>
        </div>
        <div ref="observer" class="observer"></div>
        <!-- <div class="page__wrapper">
            <my-button 
                :disabled="page <= 1" 
                @click="changePage(--page)">Prev {{ page }}</my-button>
            <div 
                :disabled="page >= totalPages" 
                @click="changePage(++page)">Next {{ page }}</div>
        </div> -->
    </div>
   
</template>

<script>
import  PostList from "./components/PostList.vue";
import  PostForm from "./components/PostForm.vue";
import axios from 'axios';
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
            isPostLoading: false,
            page: 1,
            limit: 10,
            totalPages: 0,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                { value: 'title', name: 'By Title' },
                { value: 'description', name: 'By Description' }
            ]
        }
    },
    mounted() {
        this.fetchPosts();

        console.log(this.$refs.observer);
        const options = {
             rootmargin: '0px',
             threshold: 0.5
         };
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting){
                console.log('Load more posts');
                this.page++;
                this.loadMorePosts();
            } else {
                console.log('No more posts to load');
            }
            console.log(observer);
            //  entries.foreach(entry => {
            //      if (entry.isintersecting) {
            //          this.page++;
            //          this.loadmoreposts();
            //      }
            //  });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => {
                return a[this.selectedSort]?.localeCompare(b[this.selectedSort]);
            });
        },
        sortedAndSearchedPosts() {
            return [...this.posts].filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    watch: {

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
        changePage(page) {
            this.page = page;
            this.fetchPosts();
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                console.log(this.page);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }   
                });
                this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
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
        },
        async loadMorePosts() {
            try {
                this.isPostLoading = true;
                console.log(this.page);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }   
                });
                this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
                    this.posts = [...this.posts, ...response.data];
                
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
    width: 50%;
    text-align: center;
    margin: 20px auto;
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

.app__btns{
    display: flex;
    justify-content: space-between;
}

</style>