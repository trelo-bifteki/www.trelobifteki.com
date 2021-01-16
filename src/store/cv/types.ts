import {
  GetterTree, MutationTree,
} from 'vuex';
import {
  RootState,
} from '../types';


export interface CurriculumVitaeState {
  skills: ReadonlyArray<ResumeSkill>;
  resume: Resume;
  packageVersion: string;
}

export interface CvGetterTree extends GetterTree<CurriculumVitaeState, RootState> {
  basics: (state: CurriculumVitaeState) => ResumeBasics;
  fullName: (state: CurriculumVitaeState, getters: any) => string;
  education: (state: CurriculumVitaeState) => Array<ResumeEducation>;
}

export interface CvMutationTree extends MutationTree<CurriculumVitaeState> {
  updateSkills: (state: CurriculumVitaeState, skills: ReadonlyArray<ResumeSkill>) => void;
}

export interface ResumeSkill {
  label: string;
  level: number;
}

export interface ResumeInterest {
  label: string;
}

export interface ResumeLocation {
  /**
   * To add multiple address lines, use
   * . For example, 1234 Glücklichkeit Straße
   * Hinterhaus 5. Etage li.
   */
  address?: string;
  postalCode?: string;
  city?: string;
  /**
   * code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
   */
  countryCode?: string;
  /**
   * The general region where you live. Can be a US state, or a province, for instance.
   */
  region?: string;
  [k: string]: any;
}

export interface ResumeProfile {
  /**
   * e.g. Facebook or Twitter
   */
  network?: string;
  /**
   * e.g. neutralthoughts
   */
  username?: string;
  /**
   * e.g. http://twitter.example.com/neutralthoughts
   */
  url?: string;
}

export interface ResumeBasics {
  name?: string;
  /**
   * e.g. Web Developer
   */
  label?: string;
  /**
   * URL (as per RFC 3986) to a image in JPEG or PNG format
   */
  image?: string;
  /**
   * e.g. thomas@gmail.com
   */
  email?: string;
  /**
   * Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
   */
  phone?: string;
  /**
   * URL (as per RFC 3986) to your website, e.g. personal homepage
   */
  url?: string;
  /**
   * Write a short 2-3 sentence biography about yourself
   */
  summary?: string;
  location?: ResumeLocation;
  profiles: Array<ResumeProfile>;
}

export interface ResumeWork {
  name: string;
  location: string;
  description: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: Array<string>;
}

export interface ResumeEducation {
  institution: string;
}

export interface Resume {
  basics: ResumeBasics;
  work: Array<ResumeWork>;
  education: Array<ResumeEducation>;
  interests: Array<ResumeInterest>;
}
