import actions from '@/store/blog/actions';
import axios from 'axios';

jest.mock('axios');

describe('actions', () => {
  beforeEach(() => {
    axios.get.mockClear();
  });

  it('refreshes posts', async () => {
    const commit = jest.fn();
    axios.get.mockResolvedValue({
    });

    await actions.refreshPosts({
      commit
    });

    expect(commit).toHaveBeenCalled();
  });

  it('refreshes post content', async () => {
    const content = {
      state: {
        selectedPostId: 1,
      },
      commit: jest.fn(),
    };
    axios.get.mockResolvedValue({
    });

    await actions.refreshPostContent(content);

    expect(content.commit).toHaveBeenCalled();
  });
});
