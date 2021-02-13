import actions from '@/store/blog/actions';
import axios from 'axios';
import {
  createDefaultState,
} from '@/store/blog/state';
import {
  Commit,
} from 'vuex';

jest.mock('axios');

describe('actions', () => {
  const mockGet = axios.get as jest.Mock;

  beforeEach(() => {
    mockGet.mockClear();
  });

  it('refreshes posts', async () => {
    const commit = jest.fn();
    mockGet.mockResolvedValue({
    });

    await actions.refreshPosts({
      commit,
    });

    expect(commit).toHaveBeenCalled();
  });

  it('refreshes post content', async () => {
    const state = createDefaultState();
    const commit =  jest.fn() as Commit;

    await actions.refreshPostContent({
      state,
      commit,
    });

    expect(commit).toHaveBeenCalled();
  });
});
