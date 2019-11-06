import request from 'superagent';

export default {
  refreshEducation({ commit }) {
    return request
      .get('/static/education.json')
      .end((error, response) => {
        commit('updateEducation', response.body);
        return response;
      });
  },
  refreshInterests({ commit }) {
    return request
      .get('/static/interests.json')
      .end((error, response) => {
        commit('updateInterests', response.body);
        return response;
      });
  },
  refreshJobs({ commit }) {
    return request
      .get('/static/jobs.json')
      .end((err, response) => {
        commit('updateJobs', response.body);
        return response;
      });
  },
  refreshSkills({ commit }) {
    return request
      .get('/static/skills.json')
      .end((error, response) => {
        commit('updateSkills', response.body);
        return response;
      });
  },
  refreshPersonalInfo({ commit }) {
    return request
      .get('/static/personal-info.json')
      .end((error, response) => {
        commit('updatePersonalInfo', response.body);
        return response;
      });
  },
}
