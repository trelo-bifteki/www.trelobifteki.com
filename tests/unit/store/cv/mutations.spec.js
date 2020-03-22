import mutations from '@/store/cv/mutations';

describe('cv.mutations', () => {
  it('updates skills', () => {
    const store = {
      skills: [],
    };
    const skills = ['skill 1'];
    mutations.updateSkills(store, skills);

    expect(store.skills).toEqual(skills);
  });

  it('updates resume', () => {
    const store = {
      resume: null,
    }
    const resume = {
    };

    mutations.updateResume(store, resume);

    expect(store.resume).toEqual(resume);
  });
});
