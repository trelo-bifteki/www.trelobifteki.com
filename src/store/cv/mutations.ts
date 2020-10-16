export default {
  updateSkills: (state, skills) => {
    state.skills = [...skills];
  },
  /**
   * @param {Object} state
   * @param {Object} resume
   */
  updateResume: (state, resume) => {
    state.resume = resume;
  }
};
