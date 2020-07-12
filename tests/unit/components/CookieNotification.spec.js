import CookieNotification from '@/components/CookieNotification';
import {
  shallowMount
} from '@vue/test-utils';
import gdprService from '@/services/localStorage';

jest.mock('@/services/localStorage');

describe('CookieNotification', () => {
  const $ga = {
    enable: jest.fn(),
    page: jest.fn(),
    disable: jest.fn(),
  };

  const getWrapper = (propsData = {
  }) => shallowMount(CookieNotification, {
    mocks: {
      $ga
    },
    propsData,
  });

  beforeEach(() => {
    gdprService.isGdprAccepted.mockClear();
  });

  it('hides the cookie notification by default', () => {
    gdprService.isGdprAccepted.mockReturnValue(true);
    const wrapper = getWrapper();

    expect(
      wrapper.find('.cookie-notification').exists()
    ).toBe(false);
  });

  it('displays the cookie notification after is mounted', async () => {
    gdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();
    await wrapper.vm.$nextTick();
    expect(
      wrapper.find('.cookie-notification').exists()
    ).toBe(true);
  });

  it('closes the cookie notification after we click OK button', async () => {
    gdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isVisible).toBe(true);
    expect(wrapper.vm.$ga).toBeDefined();
    const button = wrapper.find('.cookie-notification__button--ok');

    button.trigger('click');
    await wrapper.vm.$nextTick();

    expect(
      $ga.enable
    ).toHaveBeenCalled();
    expect(
      wrapper.find('.cookie-notification').exists()
    ).toBe(false);
  });

  it('closes the cookie notification after we click NO WAY button', async () => {
    gdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$ga).toBeDefined();
    expect(wrapper.vm.isVisible).toBe(true);
    const button = wrapper.find('.cookie-notification__button--no');
    button.trigger('click');

    expect(
      $ga.disable
    ).toHaveBeenCalled();

    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.cookie-notification').exists()
    ).toBe(false);
  });
})
