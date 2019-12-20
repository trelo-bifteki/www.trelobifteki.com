import isUndefined from 'lodash/isUndefined';

export default {
  /**
   * @param {Object} state containing resume
   * @returns {Object}
   */
  basics: state => state.resume.basics,
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
  latestWork: state => state.resume.work.find(work => isUndefined(work.endDate)),

  /**
   * @param {Object} state
   * @returns {Object}
   */
  location: (state, getters) => getters.basics.location,

  /**
   * @param {Object} state
   * @returns {Array}
   */
  profiles: (state, getters) => getters.basics.profiles,
};
