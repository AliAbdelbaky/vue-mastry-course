import Example from '@/views/Example.vue'
import {
    mount
} from '@vue/test-utils'
describe('ExampleAppComponent', () => {
    test('if user is not logged in, do not show logout button', () => {
        const wrapper = mount(Example);
        expect(wrapper.find('button').isVisible()).toBe(false)
    })
    test("if logged in, show logout button", async () => {
        const wrapper = mount(Example)
        wrapper.setData({
            loggedIn: true
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})