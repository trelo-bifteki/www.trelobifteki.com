import getters from '@/store/cv/getters';

describe('blog/getters', () => {
  it('resolves basics information', () => {
    const state = {
      resume: {
        basics: {
          name: 'test',
        },
      },
    };
    const basics = getters.basics(state);

    expect(basics).toEqual({
      name: 'test',
    });
  });
});
