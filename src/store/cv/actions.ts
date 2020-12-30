import axios from 'axios';
import {
  Commit, ActionTree,
} from 'vuex';

import {
  CurriculumVitaeState,
} from './types';

import {
  Skill,
} from '@/models/resume';

import {
  ResumeSchema,
} from '@kurone-kito/jsonresume-types';

interface ActionInterface extends ActionTree<CurriculumVitaeState, any> {
  refreshSkills({
    commit,
  }: {
    commit: Commit;
  }): Promise<ReadonlyArray<Skill>>;

  refreshResume({
    commit,
  }: {
    commit: Commit;
  }): Promise<ResumeSchema>;
}

export const actions: ActionInterface = {
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
  refreshSkills({
    commit,
  }: {
    commit: Commit;
  }) {
    return axios
      .get('/static/skills.json')
      .then(({
        data,
      }) => {
        commit('updateSkills', data);
        return data;
      });
  },
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
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
