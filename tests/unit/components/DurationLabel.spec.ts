import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import {
  ComponentPublicInstance,
} from 'vue';

import DurationLabel from '@/components/DurationLabel.vue';
import {
  qaRef,
} from '../mocks';

const qaRefs = {
  root: qaRef('duration-label'),
  start: qaRef('duration-label__start'),
  end: qaRef('duration-label__end'),
}

describe('DurationLabel', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(
    DurationLabel,
    {
      props: {
        start: '2014-01-01',
        end: '2016-06-01',
      },
    },
  );

  it('loads successfully', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.root);
    expect(element.exists()).toBe(true);
  });

  it('shows start year', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.start);
    expect(element.text()).toEqual('2014');
  });

  it('shows end year', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.end);
    expect(element.text()).toEqual('2016');
  })
});
