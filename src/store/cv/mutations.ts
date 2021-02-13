import {
  CurriculumVitaeState,
  CvMutationTree,
  Resume,
} from './types';

const mutations: CvMutationTree = {
  updateSkills: (state, skills) => {
    state.skills = [ ...skills ];
  },
  /**
   * @param {Object} state
   * @param {Object} resume
   */
  updateResume: (state: CurriculumVitaeState, resume: Resume) => {
    state.resume = resume;
  },
};

export default mutations;
