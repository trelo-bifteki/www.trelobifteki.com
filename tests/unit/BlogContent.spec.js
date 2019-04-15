/* eslint-env jest */

import BlogContent from '@/components/BlogContent';
import { shallowMount } from '@vue/test-utils';

describe('BlogContent', () => {
  const createWrapper = content => shallowMount(BlogContent, {
    propsData: {
      content,
    },
  });

  it('renders provided content when provided', () => {
    const wrapper = createWrapper('Hello');
    expect(
      wrapper.find('.blog-content').text()
    ).toEqual('Hello');
  });
});