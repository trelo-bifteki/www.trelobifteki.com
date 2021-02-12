import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import PostSummary from '@/components/PostSummary.vue';

describe('PostSummary', () => {
  const getWrapper = (post: any): Wrapper<PostSummary> => shallowMount(PostSummary, {
    propsData: {
      post,
    },
    stubs: {
      'router-link': true,
    },
  });

  it('renders formatted date when date post created field is 1/1/2019', () => {
    const wrapper = getWrapper({
      created: new Date(1546300800),
    });

    expect(
      wrapper.find('.post-summary__date').text(),
    ).toBe('1/1/2019')
  });

  it('renders title from the post title', () => {
    const wrapper = getWrapper({
      title: 'A post',
    });

    expect(
      wrapper.find('.post-summary__title').text(),
    ).toBe('A post');
  });
});
