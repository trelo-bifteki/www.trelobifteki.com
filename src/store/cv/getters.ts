import {
  CurriculumVitaeState, ResumeBasics, CvGetterTree,
} from './types';

const isUndefined = (value: any): boolean => typeof value === 'undefined';

const getters: CvGetterTree = {
  /**
   * @param {Object} state containing resume
   * @returns {Object}
   */
  basics: state  => state.resume.basics as ResumeBasics,

  /**
   * @param {Object} state containing resume
   * @returns {Array}
   */
  education: (state: CurriculumVitaeState) => state.resume.education,

  /**
   * @param {Object} state
   * @param {Object} existing getters
   * @returns {string}
   */
  fullName: (state, getters) => getters.basics.name,

  /**
   * @param {Object} state
   * @returns {Object}
   */
  latestWork: (state: CurriculumVitaeState) => state.resume!.work!.find(
    (work: any) => isUndefined(work.endDate),
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
