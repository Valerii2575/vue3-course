<template>
    <input type="text"
    :value="modelValue"
    @input="updateImput"/>
</template>
<script>
    export default {
        name: 'MyInput',
         props: {
             modelValue: [String, Number],
         },
        //  computed: {
        //      inputvalue: {
        //          get() {
        //              return this.value;
        //          },
        //          set(value) {
        //              this.$emit('input', value);
        //          }
        //      }
        //  },
         methods: {
            updateImput(event){
                console.log(event.target.value);
                this.$emit('update:modelValue', event.target.value);
                //this.inputvalue = event.target.value;
            }
         }
    }
</script>
<style scoped>
input {
    width: 100%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid teal;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>