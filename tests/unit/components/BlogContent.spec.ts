import {
  ComponentPublicInstance,
} from 'vue';
import BlogContent from '@/components/BlogContent.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('BlogContent', () => {
  const createWrapper = (content: string): VueWrapper<ComponentPublicInstance> => shallowMount(BlogContent, {
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
