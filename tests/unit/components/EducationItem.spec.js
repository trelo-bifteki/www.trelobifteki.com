/* eslint-env jest */

import { shallowMount } from '@vue/test-utils';
import EducationItem from '@/components/EducationItem';
import localizedDate from '@/filters/localizedDate.filter';

jest.mock('@/filters/localizedDate.filter');

describe('EducationItem', ()=> {
  const createWrapper = item => shallowMount(EducationItem, {
    propsData: {
      item,
    }
  });

  const defaultItem = {
    institution: 'Test institution',
    area: 'Test area',
    startDate: '01-01-1970',
    endDate: '01-01-1971',
    studyType: 'Test description',
  };

  beforeEach(() => {
    localizedDate.mockClear();
  });

  it('renders education item title', () => {
    const wrapper = createWrapper(defaultItem);

    expect(
      wrapper.find('.education__title').text()
    ).toBe('Test institution');
  });

  it('renders education item subtitle', () => {
    const wrapper = createWrapper(defaultItem);

    expect(
      wrapper.find('.education__subtitle').text()
    ).toBe('Test area');
  });

  it('renders education start time', () => {
    localizedDate.mockReturnValue('start');
    const wrapper = createWrapper(defaultItem);

    expect(
      wrapper.find('[qa-ref=education-item-start]').text()
    ).toBe('start');
  });

  it('renders education item description', () => {
    const wrapper = createWrapper(defaultItem)

    expect(
      wrapper.find('.education__description').text()
    ).toBe('Test description');
  });
});
