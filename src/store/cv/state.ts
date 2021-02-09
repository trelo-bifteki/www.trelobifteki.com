import {
  CurriculumVitaeState,
} from './types';

export const createDefaultState = (): CurriculumVitaeState => ({
  skills: [],
  resume: {
    basics: {
      name: '',
      label: '',
      location: {
        address: '',
        city: '',
        countryCode: '',
      },
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
