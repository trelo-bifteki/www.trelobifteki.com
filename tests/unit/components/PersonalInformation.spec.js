import { shallowMount } from '@vue/test-utils';
import PersonalInformation from '@/components/PersonalInformation';

const EXAMPLE_NAME = 'Max Mustermann';

describe('PersonalInformation', () => {
  const getWrapper = propsData => shallowMount(PersonalInformation, {
    propsData,
  });

  it('renders fullname', () => {
    const wrapper = getWrapper({
      name: EXAMPLE_NAME,
      title: 'Deveoper',
      company: 'Acme',
      location: {},
      profiles: [],
    });

    expect(
      wrapper.find('.personal-information__fullname').text()
    ).toBe(EXAMPLE_NAME)
  });
});
