import JobItem from '@/components/JobItem.vue';
import {
  ResumeWork,
} from '@/store/cv/types';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import {
  createResumeWork,
} from '../mocks';

describe('JobItem', () => {
  const createWrapper = (job: ResumeWork): Wrapper<Vue> => shallowMount(JobItem, {
    propsData: {
      job,
    },
  });

  it('renders company name', () => {
    const jobItem= createResumeWork();
    const wrapper = createWrapper(jobItem);
    const element = wrapper.find('.job__company');
    expect(element.text()).toEqual('Acme');
  });
})
