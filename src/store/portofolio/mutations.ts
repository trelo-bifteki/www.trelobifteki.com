import {
  PortofolioMutationTree,
} from './types';

export const mutations: PortofolioMutationTree = {
  updateProjects(state, projects) {
    state.projects = [ ...projects ];
  },
};
