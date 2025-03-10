import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import PostSummary from '@/components/PostSummary.vue';
import { qaRef } from '../mocks';

const defaultPost = {
  title: 'A post',
  created: new Date(1546300800),
}

describe('PostSummary', () => {
  const getWrapper = (post = defaultPost): VueWrapper<ComponentPublicInstance> => shallowMount(PostSummary, {
    props: {
      post,
    },
    global: {
      stubs: {
        'router-link': {
          template: '<div class="router-link"><slot /></div>',
        },
      },
    },
  });

  it('renders formatted date when date post created field is 1/1/2019', () => {
    const wrapper = getWrapper();
    expect(
      wrapper.find(qaRef('post-summary__date')).text(),
    ).toContain('2019')
  });

  it('renders title from the post title', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.find('.post-summary__title').text(),
    ).toBe('A post');
  });
});
