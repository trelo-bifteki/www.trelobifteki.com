import {
  CurriculumVitaeState,
} from './types';

export const createDefaultState = (): CurriculumVitaeState => ({
  skills: [],
  resume: {
    basics: {
      profiles: [],
    },
    education: [],
    interests: [],
    skills: [],
    work: [],
  },
  packageVersion: process.env.PACKAGE_VERSION,
});

export const state: CurriculumVitaeState = createDefaultState();
