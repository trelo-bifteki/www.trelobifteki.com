import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import SocialLinks from '@/components/SocialLinks.vue';
import {
  ResumeProfile,
} from '@/store/cv/types';

describe('SocialLinks', () => {
  const getWrapper = (profiles: Array<ResumeProfile>): VueWrapper<ComponentPublicInstance> => shallowMount(SocialLinks, {
    props: {
      profiles,
    },
  });

  it.each([
    [ 'Github', '.icon-github' ],
    [ 'Linkedin', '.icon-linkedin' ],
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
      wrapper.get(iconClass).exists(),
    ).toBe(true);
  });
});
