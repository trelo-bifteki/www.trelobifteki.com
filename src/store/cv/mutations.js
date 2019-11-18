export default {
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
  /**
   * @param {Object} state
   * @param {Object} resume
   */
  updateResume: (state, resume) => {
    state.resume = resume;
  }
};
