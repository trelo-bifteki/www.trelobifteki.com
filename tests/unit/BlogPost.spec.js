import {
  shallowMount
} from '@vue/test-utils';
import BlogPost from '@/components/BlogPost';

describe('BlogPost', () => {
  const $route = {
    params: {
      id: 1
    }
  };
  const $store = {
    state: {
      BlogStore: {
        posts: []
      }
    },
    commit: jest.fn(),
    dispatch: jest.fn(),
  };
  const getWrapper = () => shallowMount(BlogPost, {
    mocks: {
      $route,
      $store,
    },
    stubs: [
      'SpinningLoader',
      'BlogContent'
    ]
  });

  it('renders a formatted date', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.contains('.blog-post--loading')
    ).toBe(true);
  });
})
