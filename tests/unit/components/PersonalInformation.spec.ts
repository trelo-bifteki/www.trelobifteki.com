import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import PersonalInformation from '@/components/PersonalInformation.vue';

const EXAMPLE_NAME = 'Max Mustermann';

describe('PersonalInformation', () => {
  const defaultPropsData = {
    name: EXAMPLE_NAME,
    title: 'Developer',
    company: 'Acme',
    location: {
    },
    profiles: [],
  };

  const getWrapper = (propsData = defaultPropsData): Wrapper<Vue> => shallowMount(PersonalInformation, {
    propsData,
  });

  it('renders fullname', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.find('.personal-information__fullname').text(),
    ).toBe(EXAMPLE_NAME)
  });
});
