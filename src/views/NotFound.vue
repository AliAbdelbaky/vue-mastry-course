<template>
    <div>
        <h1>
            Oops!
        </h1>
        <h3>the {{resource}} you're looking for is not here</h3>
        <router-link :to="{name:'event-list'}">Go Back to Homepage</router-link>
    </div>
</template>
<script>
export default {
    props: {
        resource: {
            type: String,
            required: true
        }
    }
}
</script>
