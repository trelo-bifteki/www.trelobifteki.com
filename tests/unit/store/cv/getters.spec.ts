import getters from '@/store/cv/getters';
import {
  createDefaultState
} from '@/store/cv/state';

describe('blog/getters', () => {
  it('resolves basics information', () => {
    const state = createDefaultState();
    state.resume = {
      basics: {
        name: 'test',
      },
    };
    const basics = getters.basics(state);

    expect(basics).toEqual({
      name: 'test',
    });
  });

  it('resolves fullName', () => {
    const state = createDefaultState();
    const gettersState = {
      basics: {
        name: 'test',
      },
    };
    const fullName = getters.fullName(state, gettersState);

    expect(fullName).toEqual('test');
  });
});
