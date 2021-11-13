import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount, VueWrapper,
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

  const getWrapper = (props = defaultprops): VueWrapper<ComponentPublicInstance> => shallowMount(PersonalInformation, {
    props,
  });

  it('renders fullname', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.find('.personal-information__fullname').text(),
    ).toBe(EXAMPLE_NAME)
  });
});
