import { shallowMount } from '@vue/test-utils';
import SocialLinks from '@/components/SocialLinks';

describe('SocialLinks', () => {
  const getWrapper = profiles => shallowMount(SocialLinks, {
    propsData: {
      profiles,
    }
  });

  it.each([
    ['Github', '.icon-github'],
    ['Linkedin', '.icon-linkedin-squared']
  ])('load a link when icon %s = %s', (
    network,
    iconClass,
  ) => {
    const wrapper = getWrapper([
      {
        network,
        url: '/${network}',
      },
    ]);

    expect(
      wrapper.contains(iconClass)
    ).toBe(true);
  });
});
