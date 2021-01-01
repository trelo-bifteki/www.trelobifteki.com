import {
  actions,
} from '@/store/cv/actions';

import axios from 'axios';

jest.mock('axios');

describe('actions', () => {
  const mockGet = axios.get as any;

  beforeEach(() => {
    mockGet.mockClear();
  });

  it('refreshes resume', async () => {
    const commit = jest.fn();
    mockGet.mockResolvedValue({
      data: {
      },
    });

    await actions.refreshResume({
      commit,
    });

    expect(commit).toHaveBeenCalledWith('updateResume', {
    });
  });
});
