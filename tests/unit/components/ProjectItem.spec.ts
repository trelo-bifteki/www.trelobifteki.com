import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import ProjectItem from '@/components/ProjectItem.vue'
import {
  Project,
} from '@/store/portofolio/types';
import {
  createProject, qaRef,
} from '../mocks';

const qaRefs = {
  root: qaRef('project-item'),
  title: qaRef('project-item__title'),
}

describe('PortofolioItem', () => {
  const createWrapper = (project: Project): VueWrapper<ComponentPublicInstance> => shallowMount(ProjectItem, {
    props: {
      project,
    },
  });

  it('loads properly', () => {
    const project = createProject();
    const wrapper = createWrapper(project);
    const element = wrapper.find(qaRefs.root);
    expect(element.exists()).toBe(true);
  });

  it('shows title', () => {
    const project = createProject();
    const wrapper = createWrapper(project);
    const element = wrapper.find(qaRefs.title);
    expect(element.text()).toEqual('Developer');
  });
});
