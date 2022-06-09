<template>
    <div>
        <label :for="id" v-if="label">{{ label }}</label>
        <select
            v-on="listeners"
            :id="id"
            :value="value"
            type="text"
            @input="updateValue"
            v-bind="$attrs"
        >
            <option
                v-for="(option, i) in options"
                :key="option + i"
                :selected="option === value"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            id: '',
        }
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        value: [String, Number],
        options: {
            type: Array,
            required: true,
        },
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        },
        generateID() {
            const id = Math.floor(Math.random() * 10000000)
            this.id = `${id}_select`
        },
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue,
            }
        },
    },
    created() {
        this.generateID()
    },
}
</script>
