<template>
  
  <select :bind="modelValue" @change="changeOptions">
    <option value="" disabled>Select from list</option>
    <option v-for="option in options"
            :key="option.value" 
            :value="option.value">
            {{ option.name }}
        </option>
   </select>

</template>

<script>
export default {
  name: 'MySelect',
    props: {
        modelValue: {
        type: [String, Number],
        default: ''
        },
        options: {
        type: Array,
        default: () => []
        }
    },
  components: {
    },
  data() {
    return {
    }
  },
 computed: {
    },
 methods: {
    changeOptions(event) {
        this.$emit('update:modelValue', event.target.value);
        this.$emit('change', event.target.value);
    },
 mounted(){
    }
}
}
</script>

<style scoped>
</style>