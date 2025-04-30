<template>
    <div v-if="show" class="dialog" @click.stop="closeDialog">
        <div @click.stop class="dialog-content">
            <h4>Dialog</h4>
            <slot></slot>
            <MyButton @click="closeDialog">Close</MyButton>
        </div>
        <div class="dialog-overlay" @click="closeDialog"></div>

    </div>
</template>
<script>
export default {
    name: 'MyDialog',
    props: {
        show: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        closeDialog() {
            this.$emit('update:show', false);
        }
    }
}
</script>
<style scoped>
.dialog{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
}

.dialog-content {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
}
.dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
</style>