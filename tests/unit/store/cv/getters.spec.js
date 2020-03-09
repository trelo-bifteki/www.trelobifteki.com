import getters from '@/store/cv/getters';

describe('blog/getters', () => {
  it('resolves basics information', () => {
    const state = { resume: { basics: { name: 'test', }, }, };
    const basics = getters.basics(state);

    expect(basics).toEqual({ name: 'test', });
  });

  it('resolves fullName', () => {
    const gettersState = { basics: { name: 'test', }, };
    const fullName = getters.fullName(null, gettersState);

    expect(fullName).toEqual('test');
  });
});
