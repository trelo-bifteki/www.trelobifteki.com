import axios from 'axios';
import {
  PortofolioActionTree, Project,
} from './types';

export const actions: PortofolioActionTree = {
  async loadProjects({
    commit,
  }): Promise<Project[]> {
    const response = await axios.get<Project[]>('/static/portofolio.json');
    const data = response.data;
    commit('updateProjects', data);
    return data;
  },
};
