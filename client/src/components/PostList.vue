<template>
    <div>
        <transition-group name="post-list">
            <post-item  v-for="post in posts" :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"/>
        </transition-group>        
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

.post-list{
    display: inline-block;
    margin-right: 10px;
}

.posrt-list-enter-active, 
.post-list-leave-active {
    transition: all 0.5s ease;
}
.post-list-enter, 
.post-list-leave-to /* .post-list-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateX(130px);
}

.post-list-move{
    transition: all 0.7s ease;
    transform: translateY(130px);
}
</style>