import {
  Commit,
} from 'vuex';

import {
  ActionTree, MutationTree,
} from 'vuex';

import {
  RootState,
} from '../types';

export interface PortofolioState {
  projects: Project[];
}

export interface Project {
  customer: string;
  description: string;
  title: string;
}

export interface PortofolioMutationTree extends MutationTree<PortofolioState> {
  updateProjects: (state: PortofolioState, projects: Project[]) => void;
}

export interface PortofolioActionTree extends ActionTree<PortofolioState, RootState> {
  loadProjects: ({
    commit,
  }: {
    commit: Commit;
  }) => Promise<Project[]>;
}
