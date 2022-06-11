import LoginForm from '@/components/LoginForm.vue';
import {
    mount
} from '@vue/test-utils'
describe('LoginForm', () => {
    it('emits an event with user data payload', async () => {
        const wrapper = mount(LoginForm)
        const input = wrapper.find('[data-testid="name-input"]')
        input.setValue('Ali Abdelbaqy')
        wrapper.trigger('submit')
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        await wrapper.vm.$nextTick()
        expect(formSubmittedCalls).toHaveLength(1)
        const expectedPayload = {
            name: 'Ali Abdelbaqy'
        }
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })
})