import {
  CurriculumVitaeState, CvGetterTree,
} from './types';

const isUndefined = (value: string | undefined): boolean => typeof value === 'undefined';

const getters: CvGetterTree = {
  basics(state) {
    return state.resume.basics;
  },

  education(state) {
    return state.resume.education
  },

  fullName(state, getters) {
    return getters.basics.name;
  },

  latestWork(state) {
    return state.resume.work.find(
      work => isUndefined(work.endDate),
    );
  },

  location(state, getters) {
    return getters.basics.location;
  },

  profiles(state, getters) {
    return getters.basics.profiles;
  },

  work(state: CurriculumVitaeState) {
    return state.resume.work;
  },

  interests(state: CurriculumVitaeState) {
    return state.resume.interests;
  },

  skills(state: CurriculumVitaeState) {
    return state.resume.skills;
  },
};

export default getters;
