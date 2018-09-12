import request from 'superagent';
import BlogStore from './blog.store';

export default {
  modules: {
    BlogStore,
  },
  state: {
    blogPosts: [],
    count: 0,
    education: [],
    skills: [],
    jobs: [],
    interests: [],
    personalInfo: {},
  },
  mutations: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    updateBlogPosts: (state, blogPosts) => {
      state.blogPosts = [...blogPosts];
    },
    updateEducation: (state, education) => {
      state.education = [...education];
    },
    updateSkills: (state, skills) => {
      state.skills = [...skills];
    },
    updateJobs: (state, jobs) => {
      state.jobs = [...jobs];
    },
    updateInterests: (state, interests) => {
      state.interests = [...interests];
    },
    updatePersonalInfo: (state, personalInfo) => {
      state.personalInfo = personalInfo;
    },
  },
  actions: {
    refreshEducation({ commit }) {
      return request
        .get('static/education.json')
        .end((error, response) => {
          commit('updateEducation', response.body);
          return response;
        });
    },
    refreshInterests({ commit }) {
      return request
        .get('static/interests.json')
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
  },
};
