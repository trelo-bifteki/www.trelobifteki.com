/* eslint-env jest */

import { shallowMount } from '@vue/test-utils';
import EducationItem from '@/components/EducationItem';

describe('EducationItem', ()=> {
  const createWrapper = item => shallowMount(EducationItem, {
    propsData: {
      item,
    }
  });

  const defaultItem = {
    title: 'Test title',
    subtitle: 'Test subtitle',
    time: '01-01-1970',
    description: 'Test description',
  };

  it('renders education item title', () => {
    const wrapper = createWrapper(defaultItem);

    expect(
      wrapper.find('.education__title').text()
    ).toBe('Test title');
  });

  it('renders education item subtitle', () => {
    const wrapper = createWrapper(defaultItem);

    expect(
      wrapper.find('.education__subtitle').text()
    ).toBe('Test subtitle');
  });

  it('renders education item timeline', () => {
    const wrapper = createWrapper(defaultItem);

    expect(
      wrapper.find('.education__timeline').text()
    ).toBe('01-01-1970');
  });

  it('renders education item description', () => {
    const wrapper = createWrapper(defaultItem)

    expect(
      wrapper.find('.education__description').text()
    ).toBe('Test description');
  });
});
