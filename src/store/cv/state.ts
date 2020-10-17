import { CurriculumVitaeState } from './types';

export const createDefaultState = (): CurriculumVitaeState => ({
  skills: [],
  resume: {
  },
  packageVersion: process.env.PACKAGE_VERSION,
});

export const state: CurriculumVitaeState = createDefaultState();
