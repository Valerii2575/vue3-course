<template>
    <form>
        <h4>Add Post</h4>        
        <MyInput  
           v-model="post.title"
            placeholder="title" 
            required></MyInput>
        <MyInput 
            v-model="post.description"
            placeholder="description" 
            required></MyInput>
        <MyButton 
            type="button" 
            class="btn btn-primary" 
            @click="createPost"
            >Add Post</MyButton>
    </form>
</template>
<script>

export default {
    name: 'PostForm',
    
    data() {
        return {
            post: {
                id: null,
                title: '',
                description: ''
            }
        }
    },
    methods: {
        createPost() {
            if (this.post.title && this.post.description) {
                this.$emit('add-post', this.post);                
            } else {
                alert('Please fill in all fields.');
            }

            this.post = {
                id: null,
                title: '',
                description: ''
            }
        }
    }
}
</script>
<style scoped>
form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
}

</style>