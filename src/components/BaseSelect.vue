<template>
    <div>
        <label :for="generateID" v-if="label">{{ label }}</label>
        <select
            v-on="listeners"
            :id="generateID"
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
import { globalInputs } from '@/core/mixins/formFieldMixin' // import mixin

export default {
    mixins: [globalInputs],
    props: {
        options: {
            type: Array,
            required: true,
        },
    },
}
</script>
