<template>
    <Fragment>
        <label :for="generateID" v-if="label">{{ label }}</label>
        <input
            :value="value"
            @input="updateValue"
            v-bind="$attrs"
            v-on="listeners"
            :id="generateID"
        />
    </Fragment>
</template>
<script>
import { globalInputs } from '@/core/mixins/formFieldMixin'
import { Fragment } from 'vue-fragment' // import mixin

export default {
    mixins: [globalInputs], // register mixin
    props: {
        value: [String, Number],
    },
    components: { Fragment },
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
