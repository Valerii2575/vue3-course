<template>
    <div class=post>
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Title:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.description }}</div>
        </div>
        <div>
            <MyButton 
                @click="$emit('remove', post)">Delete</MyButton>  
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'PostItem',    
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.post {
    width: 50%;
    background-color: #f9f9f9;
    border: 2px solid #ccc;
    padding: 20px;
    margin: 0 auto;
    margin-bottom: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}</style>