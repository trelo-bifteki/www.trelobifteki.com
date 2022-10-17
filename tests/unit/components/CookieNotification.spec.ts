import {
  ComponentPublicInstance,
} from 'vue';
import CookieNotification from '@/components/CookieNotification.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

import gdprService from '@/services/localStorage';

jest.mock('@/services/localStorage');

describe('CookieNotification', () => {
  const $ga = {
    enable: jest.fn(),
    page: jest.fn(),
    disable: jest.fn(),
  };

  const mockedGdprService = jest.mocked(gdprService);

  const getWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(CookieNotification, {
    global: {
      mocks: {
        $ga,
      },
    },
  });

  beforeEach(() => {
    mockedGdprService.acceptGdpr.mockReset();
    mockedGdprService.isGdprAccepted.mockReset();
  });

  it('hides the cookie notification by default', () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(true);
    const wrapper = getWrapper();

    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(false);
  });

  it('displays the cookie notification after is mounted', async () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();
    await wrapper.vm.$nextTick();
    expect(mockedGdprService.isGdprAccepted).toHaveBeenCalled();
    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(true);
  });

  it('closes the cookie notification after we click OK button', async () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();

    await wrapper.vm.$nextTick();

    const button = wrapper.find('.cookie-notification__button--ok');

    button.trigger('click');
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(false);
  });

  it('closes the cookie notification after we click NO WAY button', async () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();

    await wrapper.vm.$nextTick();

    const button = wrapper.find('.cookie-notification__button--no');
    button.trigger('click');

    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(false);
  });
})
