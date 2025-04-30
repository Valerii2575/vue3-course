<template>
    <div>
        <post-item  v-for="post in posts" :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"/>
    </div>   
</template>
<script>
    import PostItem from './PostItem.vue';
    export default {
        name: 'PostList',
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
}
.container h4 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
}
</style>