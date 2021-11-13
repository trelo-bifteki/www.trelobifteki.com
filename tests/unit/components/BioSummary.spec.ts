/* eslint-env jest */

import {
  ComponentPublicInstance,
} from 'vue';
import BioSummary from '@/components/BioSummary.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('BioSummary', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(BioSummary);

  it('displays first line', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.bio-summary').text(),
    ).toContain('Software engineer');
  });

  it('does not display further information by default', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.bio-summary').text(),
    ).not.toContain('CHECK24');
  });

  it('displays further info after clicking more', async () => {
    const wrapper = createWrapper();
    const button = wrapper.find('[qa-ref=bio-summary-more-button]');
    button.trigger('click');
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.bio-summary').text(),
    ).toContain('CHECK24');
  });
});
