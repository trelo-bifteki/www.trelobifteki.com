import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import ProjectItem from '@/components/ProjectItem.vue'

import {
  createProject, qaRef,
} from '../mocks';

const qaRefs = {
  root: qaRef('project-item'),
  title: qaRef('project-item__title'),
  description: qaRef('project-item__description'),
  customer: qaRef('project-item__customer'),
}

describe('PortofolioItem', () => {
  const createWrapper = (
    project = createProject(),
  ): VueWrapper<ComponentPublicInstance> => shallowMount(ProjectItem, {
    props: {
      project,
    },
  });

  it('loads properly', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.root);
    expect(element.exists()).toBe(true);
  });

  it('shows title', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.title);
    expect(element.text()).toEqual('Developer');
  });

  it('shows description', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.description);
    expect(element.text()).toEqual('Another description');
  });

  it('shows customer', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(qaRefs.customer);
    expect(element.text()).toEqual('Acme Org');
  });
});
