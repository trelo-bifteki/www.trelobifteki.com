import axios from 'axios';

export default {
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
  refreshSkills({ commit }) {
    return axios
      .get('/static/skills.json')
      .then(({ data }) => {
        commit('updateSkills', data);
        return data;
      });
  },
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
  refreshResume({ commit }) {
    return axios
      .get('/static/resume.json')
      .then(({ data }) => {
        commit('updateResume', data);
        return data;
      });
  }
};
