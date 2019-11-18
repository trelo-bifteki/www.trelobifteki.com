export default {
  /**
   * @param {Object} state containing resume
   * @returns {Object}
   */
  basics: state => {
    return state.resume.basics;
  },
  /**
   * @param {Object} state
   * @param {getters} existing getters
   * @returns {string}
   */
  fullName: (state, getters) => {
    return getters.basics.name;
  },
}
