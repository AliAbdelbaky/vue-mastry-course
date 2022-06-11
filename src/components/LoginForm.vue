<template>
    <form @submit.prevent="submit">
        <input data-testid="name-input" type="text" v-model="name" />
        <base-button type="submit">submit</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        submit() {
            this.$emit('formSubmitted', { name: this.name })
        },
    },
}
</script>

<style lang="scss" scoped></style>
