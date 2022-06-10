export const globalInputs = {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: ''
        },
        value: [String, Number]
    },
    computed: {
        generateID() {
            const id = Math.floor(Math.random() * 10000000)
            return `${id}_input_feild`
        },
        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue,
            }
        },
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        },
    }
}