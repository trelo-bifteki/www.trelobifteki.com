/* eslint-env jest */

import BioSummary from '@/components/BioSummary.vue';
import { shallowMount } from '@vue/test-utils';

describe('BioSummary', () => {
  const createWrapper = () => shallowMount(BioSummary);

  it(`displays first line`, () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.bio-summary').text()
    ).toContain('Software engineer');
  });

  it('does not display further information by default', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.bio-summary').text()
    ).not.toContain('CHECK24');
  });
});