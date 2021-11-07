import SpinningLoader from '@/components/SpinningLoader.vue';
import {
  shallowMount,
} from '@vue/test-utils';

describe('SpinningLoader', () => {
  it('renders root element', () => {
    const wrapper = shallowMount(SpinningLoader);
    const element = wrapper.find('.spinning-loader');
    expect(element.exists()).toBe(true);
  });
});
