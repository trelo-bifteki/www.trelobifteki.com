import {
  shallowMount
} from '@vue/test-utils';
import MainHeader from '@/components/MainHeader.vue';

describe('MainHeader', () => {
  const createWrapper = () => shallowMount(MainHeader);

  it('displays title with my name', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.main-header__title').text()
    ).toBe('Lampros Papadimitriou')
  });
});
