import IconBase from '@/components/icons/IconBase.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconBase, {
    propsData: {
      iconName: 'testName',
      width: '20px',
      iconColor: 'red',
    }
  });

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').exists()
    ).toBe(true);
  });

  it('renders parameter iconName as aria-labelledby', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('aria-labelledby')
    ).toEqual('testName');
  });

  it('renders width parameter as icon width', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('width')
    ).toEqual('20px');
  });

  it('renders group color as red', () => {
      const wrapper = createWrapper();

      expect(
        wrapper.find('.icon-base__group').classes()
      ).toEqual([
        'icon-base__group',
        'icon-base__group--red',
      ]);
    })
});
