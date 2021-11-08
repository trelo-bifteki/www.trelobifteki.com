/* eslint-env jest */

import BlogContent from '@/components/BlogContent.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('BlogContent', () => {
  const createWrapper = (content: string): Wrapper<Vue> => shallowMount(BlogContent, {
    props: {
      content,
    },
  });

  it('renders provided content when provided', () => {
    const wrapper = createWrapper('Hello');
    expect(
      wrapper.find('.blog-content').text(),
    ).toBe('Hello');
  });
});
