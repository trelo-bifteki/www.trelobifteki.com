import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import SkillItem from '@/components/SkillItem.vue';
import {
  CvSkill,
} from '@/store/cv/types';

describe('SkillItem', () => {
  const createWrapper = (skill: CvSkill): Wrapper<Vue> => shallowMount(SkillItem, {
    propsData: {
      skill,
    },
  });

  it('displays label test when provided as input', () => {
    const wrapper = createWrapper({
      label: 'test',
      level: 50,
    });
    const element = wrapper.find('[qa-ref=skill-item__label]');
    expect(
      element.text(),
    ).toEqual('test');
  });

  it('displays progress bar when provided as input', () => {
    const wrapper = createWrapper({
      label: 'another test',
      level: 60,
    });
    const element = wrapper.find('[qa-ref=skill-item__progress-bar]');
    expect(
      element.attributes('aria-valuenow'),
    ).toEqual('60');
  });
});
