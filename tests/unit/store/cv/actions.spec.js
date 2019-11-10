import actions from '@/store/cv/actions';
import axios from 'axios';

jest.mock('axios');

describe('actions', () => {
  beforeEach(() => {
    axios.get.mockClear();
  });

  it('refreshes interests', async () => {
    const commit = jest.fn();
    axios.get.mockResolvedValue({
      data: 'test'
    });

    await actions.refreshInterests({ commit });

    expect(commit).toHaveBeenCalledWith('updateInterests', 'test');
  });
});
