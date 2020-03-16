import { mount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import Button from '@/components/Button.vue';

describe('Login.vue', () => {
  it('renders two buttons', () => {
    const wrapper = mount(Login);
    const buttons = wrapper.findAll(Button);

    expect(buttons).toHaveLength(2);
    wrapper.destroy();
  });

  it('has an input with type="password"', () => {
    const wrapper = mount(Login);

    expect(
      wrapper.find('[type="password"]')
        .exists()
    ).toBe(true);

    wrapper.destroy();
  });
})
