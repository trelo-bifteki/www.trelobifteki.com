import actions from '@/store/blog/actions';
import axios from 'axios';

jest.mock('axios');

describe('actions', () => {
  const mockGet = axios.get as any;

  beforeEach(() => {
    mockGet.mockClear();
  });

  it('refreshes posts', async () => {
    const commit = jest.fn();
    mockGet.mockResolvedValue({
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
    mockGet.mockResolvedValue({
    });

    await actions.refreshPostContent(content);

    expect(content.commit).toHaveBeenCalled();
  });
});
