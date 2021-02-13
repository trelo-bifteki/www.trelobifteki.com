import {
  shallowMount,
  Wrapper,
} from '@vue/test-utils';
import MainHeader from '@/components/MainHeader.vue';

describe('MainHeader', () => {
  const createWrapper = (): Wrapper<MainHeader> => shallowMount(MainHeader);

  it('displays title with my name', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.main-header__title').text(),
    ).toEqual('Lampros Papadimitriou');
  });

  it('displays a menu button', () => {
    const wrapper = createWrapper();
    expect(
      wrapper.find('[qa-ref=main-header__menu-button]').exists(),
    ).toBe(true);
  });

  it('emits an  onMenuClicked event after clicking menu button', () => {
    const wrapper = createWrapper();
    const element = wrapper.find('[qa-ref=main-header__menu-button]');
    element.trigger('click');
    expect(
      wrapper.emitted().onMenuClicked,
    ).toBeDefined();
  })
});
