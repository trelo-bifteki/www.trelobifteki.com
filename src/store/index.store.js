import axios from 'axios';

export default {
  state: {
    blogPosts: [],
    count: 0,
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
    refreshInterests({ commit }) {
      return new Promise((resolve) => {
        axios.get('static/interests.json').then((response) => {
          commit('updateInterests', response.data);
          resolve(response.data);
        });
      });
    },
    refreshJobs({ commit }) {
      return new Promise((resolve) => {
        axios.get('static/jobs.json').then((response) => {
          commit('updateJobs', response.data);
          resolve(response.data);
        });
      });
    },
    refreshSkills({ commit }) {
      return new Promise((resolve) => {
        axios.get('static/skills.json').then((response) => {
          commit('updateSkills', response.data);
          resolve(response.data);
        });
      });
    },
    refreshPersonalInfo({ commit }) {
      return new Promise((resolve) => {
        axios.get('static/personal-info.json').then((response) => {
          commit('updatePersonalInfo', response.data);
          resolve(response.data);
        });
      });
    },
  },
};
