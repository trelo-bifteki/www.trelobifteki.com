import axios from 'axios';

export default {
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
  refreshEducation({ commit }) {
    return axios
      .get('/static/education.json')
      .then(({ data }) => {
        commit('updateEducation', data);
        return data;
      });
  },
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
  refreshInterests({ commit }) {
    return axios
      .get('/static/interests.json')
      .then(({ data }) => {
        commit('updateInterests', data);
        return data;
      });
  },
  /**
   * @param {Object} object containing a commit function
   * @returns {Promise}
   */
  refreshJobs({ commit }) {
    return axios
      .get('/static/jobs.json')
      .then(({ data }) => {
        commit('updateJobs', data);
        return data;
      });
  },
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
  refreshPersonalInfo({ commit }) {
    return axios
      .get('/static/personal-info.json')
      .then(({ data }) => {
        commit('updatePersonalInfo', data);
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
