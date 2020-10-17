import { CurriculumVitaeState } from './types';

export default {
  updateSkills: (state: CurriculumVitaeState, skills: Array<string>) => {
    state.skills = [...skills];
  },
  /**
   * @param {Object} state
   * @param {Object} resume
   */
  updateResume: (state: CurriculumVitaeState, resume: any) => {
    state.resume = resume;
  },
};
