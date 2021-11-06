import IconBase from '@/components/icons/IconBase.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

const defaultProps = {
  iconName: 'testName',
  width: '20px',
  inverted: false,
  iconColor: 'default',
};

describe('IconBase', () => {
  const createWrapper = (propsData= defaultProps): Wrapper<Vue> => shallowMount(IconBase, {
    propsData,
  });

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').exists(),
    ).toBe(true);
  });

  it('renders parameter iconName as aria-labelledby', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('aria-labelledby'),
    ).toEqual('testName');
  });

  it('renders width parameter as icon width', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('width'),
    ).toEqual('20px');
  });

  it('renders group color as red', () => {
    const wrapper = createWrapper({
      ...defaultProps,
      iconColor: 'red',
    });

    expect(
      wrapper.find('.icon-base__group').classes(),
    ).toEqual([
      'icon-base__group',
      'icon-base__group--red',
    ]);
  });

  it('inverts icon when invert=true', () => {
    const wrapper = createWrapper({
      ...defaultProps,
      inverted: true,
    });

    expect(
      wrapper.find('.icon-base--inverted').exists(),
    ).toBe(true);
  });
});
