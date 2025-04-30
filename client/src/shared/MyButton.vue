<template>
    <button>
        <slot></slot>
    </button>
        
</template>
<script>
export default {
    name: 'MyButton',
    props: {
        type: {
            type: String,
            default: 'MyButton'
        },
        className: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: 'MyButton'
        }
    }
}
</script>
<style scoped>
button {
    
    background-color: none;
    color: teal;
    padding: 10px 15px;
    border: 1px solid teal;
    border-radius: 4px;
    cursor: pointer;
}
</style>