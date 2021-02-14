import axios from 'axios';
import {
  Commit, ActionTree,
} from 'vuex';

import {
  CurriculumVitaeState, ResumeSkill,
} from './types';

import {
  ResumeSchema,
} from '@kurone-kito/jsonresume-types';

import {
  RootState,
} from '../types';

interface ActionInterface extends ActionTree<CurriculumVitaeState, RootState> {
  refreshSkills({
    commit,
  }: {
    commit: Commit;
  }): Promise<ReadonlyArray<ResumeSkill>>;

  refreshResume({
    commit,
  }: {
    commit: Commit;
  }): Promise<ResumeSchema>;
}

export const actions: ActionInterface = {

  async refreshSkills({
    commit,
  }: {
    commit: Commit;
  }) {
    const response = await axios.get<ResumeSkill[]>('/static/skills.json')
    const data = response.data;
    commit('updateSkills', data);
    return data;
  },

  refreshResume({
    commit,
  }: {
    commit: Commit;
  }) {
    return axios
      .get('/static/resume.json')
      .then(({
        data,
      }) => {
        commit('updateResume', data);
        return data;
      });
  },
};
