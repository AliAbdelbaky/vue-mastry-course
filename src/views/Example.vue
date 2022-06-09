<template>
    <div>
        <form @submit.prevent="submit">
            <input
                type="email"
                placeholder="What's your email"
                v-model="email"
                @input="$v.email.$touch()"
                :class="{ error: $v.email.$error }"
            />
            <div v-if="$v.email.$error">
                <p class="errorMessage" v-if="!$v.email.email">
                    please enter a valid email
                </p>
                <p class="errorMessage" v-if="!$v.email.required">
                    email is requird
                </p>
            </div>
            <button type="submit" :disabled="$v.$invalid">Submit</button>
        </form>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            email: null,
        }
    },
    validations: {
        email: {
            required,
            email,
        },
    },
    methods:{
        submit(){
            this.$v.$touch();
            if(!this.$v.$invalid){
                console.log('Form Submition', this.email)
            }
        }
    }
}
</script>
