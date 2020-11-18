import localizedDateFilter from '@/filters/localizedDate.filter';

describe('localizedDate', () => {
  it('parses 10-05-1983 as May 1983', () => {
    expect(
      localizedDateFilter('1983-05-10'),
    ).toBe('May 1983');
  });
})
