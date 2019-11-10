import CookieNotification from '@/components/CookieNotification';
import { shallowMount } from '@vue/test-utils';

describe('CookieNotification', () => {
  const $ga = {
    enable: jest.fn(),
    page: jest.fn(),
    disable: jest.fn(),
  };

  const getWrapper = (propsData = {}) => shallowMount(CookieNotification, {
    mocks: {
      $ga
    },
    propsData,
  });

  beforeEach(() => {
    localStorage.removeItem('trelobifteki.com:isGdprAccepted');
  });

  it('hides the cookie notification by default', () => {
    const wrapper = getWrapper();

    expect(
      wrapper.contains('.cookie-notification')
    ).toBe(false);
  });

  it('displays the cookie notification after is mounted', () => {
    const wrapper = getWrapper({
      isVisible: true
    });

    expect(
      wrapper.contains('.cookie-notification')
    ).toBe(true);
  });

  it('closes the cookie notification after we click OK button', () => {
    const wrapper = getWrapper({
      isVisible: true
    });

    expect(wrapper.vm.$ga).toBeDefined();
    const button = wrapper.find('.cookie-notification__button--ok');
    button.trigger('click');

    expect(
      $ga.enable
    ).toHaveBeenCalled();

    expect(
      wrapper.contains('.cookie-notification')
    ).toBe(false);
  });

  it('closes the cookie notification after we click NO WAY button', () => {
    const wrapper = getWrapper({
      isVisible: true
    });

    expect(wrapper.vm.$ga).toBeDefined();
    const button = wrapper.find('.cookie-notification__button--no');
    button.trigger('click');

    expect(
      $ga.disable
    ).toHaveBeenCalled();

    expect(
      wrapper.contains('.cookie-notification')
    ).toBe(false);
  });
})
