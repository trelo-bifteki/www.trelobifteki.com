import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import PostSummary from '@/components/PostSummary.vue';

const defaultPost = {
  title: 'A post',
  created: new Date(1546300800),
}

describe('PostSummary', () => {
  const getWrapper = (post = defaultPost): Wrapper<PostSummary> => shallowMount(PostSummary, {
    propsData: {
      post,
    },
    stubs: {
      'router-link': true,
    },
  });

  it('renders formatted date when date post created field is 1/1/2019', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.find('.post-summary__date').text(),
    ).toBe('1/1/2019')
  });

  it('renders title from the post title', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.find('.post-summary__title').text(),
    ).toBe('A post');
  });
});
