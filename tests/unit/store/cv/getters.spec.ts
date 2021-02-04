import getters from '@/store/cv/getters';
import {
  createDefaultState,
} from '@/store/cv/state';
import {
  createResume,
} from '../../mocks';

describe('blog/getters', () => {
  it('resolves basics information', () => {
    const state = createDefaultState();
    state.resume = createResume();
    const basics = getters.basics(state);

    expect(basics.name).toEqual('Max Mustermann');
  });

  it('resolves fullName', () => {
    const state = createDefaultState();
    const gettersState = {
      basics: {
        name: 'Max Mustermann',
      },
    };
    const fullName = getters.fullName(state, gettersState);

    expect(fullName).toEqual('Max Mustermann');
  });
});
