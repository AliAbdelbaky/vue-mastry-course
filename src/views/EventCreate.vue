<template>
<div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
        <base-select label="Select a category" v-model="event.category" :options="categories"></base-select>

        <h3>Name & describe your event</h3>
        <base-input  label="Title" type="text" placeholder="Title" v-model="event.title" class="field"></base-input>
        <base-input  label="Description" type="text" placeholder="Add a description" v-model="event.description" class="field"></base-input>

        <h3>Where is your event?</h3>
        <base-input  label="Location" type="text" placeholder="Add a location" v-model="event.location" class="field"></base-input>

        <h3>When is your event?</h3>

        <div class="field">
            <label>Date</label>
            <datepicker v-model="event.date" placeholder="Select a date"/>
        </div>

        <base-select label="Select a time" v-model="event.time" :options="times" class="field"></base-select>

        <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
</div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'

export default {
    components: {
        Datepicker
    },
    data() {
        const times = []
        for (let i = 1; i <= 24; i++) {
            times.push(i + ':00')
        }
        return {
            times,
            categories: this.$store.state.categories,
            event: this.createFreshEventObject()
        }
    },
    methods: {
        createEvent() {
            NProgress.start()
            this.$store
                .dispatch('event/createEvent', this.event)
                .then(() => {
                    this.$router.push({
                        name: 'event-show',
                        params: { id: this.event.id }
                    })
                    this.event = this.createFreshEventObject()
                })
                .catch(() => {
                    NProgress.done()
                })
        },
        createFreshEventObject() {
            const user = this.$store.state.user.user
            const id = Math.floor(Math.random() * 10000000)

            return {
                id: id,
                user: user,
                category: '',
                organizer: user,
                title: '',
                description: '',
                location: '',
                date: '',
                time: '',
                attendees: []
            }
        }
    }
}
</script>

<style scoped>
.field {
    margin-bottom: 24px;
}
</style>
