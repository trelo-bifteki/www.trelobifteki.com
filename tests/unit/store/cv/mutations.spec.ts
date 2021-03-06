import mutations from '@/store/cv/mutations';
import {
  createDefaultState,
} from '@/store/cv/state';

describe('cv.mutations', () => {
  it('updates skills', () => {
    const store = createDefaultState();
    const skills = [ {
      label: 'skill 1',
      level: 50,
    } ];
    mutations.updateSkills(store, skills);

    expect(store.skills).toEqual(skills);
  });

  it('updates resume', () => {
    const store = createDefaultState();
    const resume = {
    };

    mutations.updateResume(store, resume);

    expect(store.resume).toEqual(resume);
  });
});
