/* eslint-env jest */

import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import EducationItem from '@/components/EducationItem.vue';
import localizedDate from '@/filters/localizedDate.filter';

jest.mock('@/filters/localizedDate.filter');

const defaultItem = {
  institution: 'Test institution',
  area: 'Test area',
  startDate: '01-01-1970',
  endDate: '01-01-1971',
  studyType: 'Test description',
};


describe('EducationItem', ()=> {
  const createWrapper = (item = defaultItem): Wrapper<Vue> => shallowMount(EducationItem, {
    propsData: {
      item,
    },
  });
  const mockLocalizedDate = localizedDate as jest.Mock;

  beforeEach(() => {
    mockLocalizedDate.mockClear();
  });

  it('renders education item title', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.education__title').text(),
    ).toBe('Test institution');
  });

  it('renders education item subtitle', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.education__subtitle').text(),
    ).toBe('Test area');
  });

  it('renders education start time', () => {
    mockLocalizedDate.mockReturnValue('start');
    const wrapper = createWrapper();

    expect(
      wrapper.find('[qa-ref=education-item-start]').text(),
    ).toBe('start');
  });

  it('renders education end time', () => {
    mockLocalizedDate.mockReturnValue('end');
    const wrapper = createWrapper();

    expect(
      wrapper.find('[qa-ref=education-item-end]').text(),
    ).toBe('end');
  });

  it('renders education item description', () => {
    const wrapper = createWrapper()

    expect(
      wrapper.find('.education__description').text(),
    ).toBe('Test description');
  });
});
