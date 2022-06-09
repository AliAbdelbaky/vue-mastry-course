<template>
    <div>
        <label :for="id" v-if="label">{{label}}</label>
        <input :id="id" :value="value" type="text" @input="updateValue" v-bind="$attrs">
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            id: ''
        }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        value: [String, Number]
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        },
        generateID() {
            const id = Math.floor(Math.random() * 10000000)
            this.id = `${id}_input`
        }
    },
    created(){
        this.generateID()
    }
}
</script>
