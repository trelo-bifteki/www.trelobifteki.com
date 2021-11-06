import {
  Resume, ResumeLocation, ResumeWork,
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

export const createResumeLocation = (): ResumeLocation => ({
  address: 'Berlin str',
  city: 'Berlin',
});

export const createResumeWork = (): ResumeWork => ({
  name: 'Acme',
  description: 'Acme Worldwide',
  location: 'Berlinerstr. 1',
  highlights: [],
  position: 'Software developer',
  startDate: '01.01.2010',
  endDate: '01.01.2015',
  url: 'https://www.acme.org',
  summary: 'This is a test summary',
});
