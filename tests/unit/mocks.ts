import {
  Resume,
} from '@/store/cv/types';

export const createResume = (): Resume => ({
  basics: {
    name: 'Max Mustermann',
    profiles: [],
  },
  work: [],
  education: [],
  interests: [],
  skills: [],
});
