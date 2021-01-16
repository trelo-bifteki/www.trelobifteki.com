import {
  CurriculumVitaeState, ResumeBasics, CvGetterTree,
} from './types';

const isUndefined = (value: string | undefined): boolean => typeof value === 'undefined';

const getters: CvGetterTree = {
  basics: state  => state.resume.basics as ResumeBasics,

  education: (state: CurriculumVitaeState) => state.resume.education,

  fullName: (state, getters) => getters.basics.name,

  /**
   * @param {Object} state
   * @returns {Object}
   */
  latestWork: (state: CurriculumVitaeState) => state.resume.work.find(
    work => isUndefined(work.endDate),
  ),

  /**
   * @param {Object} state
   * @returns {Object}
   */
  location: (state: CurriculumVitaeState, getters: any) => getters.basics.location,

  /**
   * @param {Object} state
   * @returns {Array}
   */
  profiles: (state: CurriculumVitaeState, getters: any) => getters.basics.profiles,

  /**
   * @param {Object} state
   * @returns {Array}
   */
  work: (state: CurriculumVitaeState) => state.resume.work,

  /**
   * @param {Object} state
   * @returns {Array}
   */
  interests: (state: CurriculumVitaeState) => state.resume.interests,

  /**
   * @param {Object} state
   * @returns {Array}
   */
  skills: (state: CurriculumVitaeState) => state.resume.skills,
};

export default getters;
