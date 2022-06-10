<template>
    <div>
        <label :for="generateID" v-if="label">{{ label }}</label>
        <input
            :value="value"
            @input="updateValue"
            v-bind="$attrs"
            v-on="listeners"
            :id="generateID"
        />
    </div>
</template>
<script>
import { globalInputs } from '@/mixins/formFieldMixin' // import mixin
export default {
    mixins: [globalInputs], // register mixin
    props: {
        value: [String, Number],
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue,
            }
        },
    },
}
</script>
