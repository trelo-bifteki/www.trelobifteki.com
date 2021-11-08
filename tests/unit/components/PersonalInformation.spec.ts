import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import PersonalInformation from '@/components/PersonalInformation.vue';

const EXAMPLE_NAME = 'Max Mustermann';

describe('PersonalInformation', () => {
  const defaultprops = {
    name: EXAMPLE_NAME,
    title: 'Developer',
    company: 'Acme',
    location: {
    },
    profiles: [],
  };

  const getWrapper = (props = defaultprops): Wrapper<Vue> => shallowMount(PersonalInformation, {
    props,
  });

  it('renders fullname', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.find('.personal-information__fullname').text(),
    ).toBe(EXAMPLE_NAME)
  });
});
