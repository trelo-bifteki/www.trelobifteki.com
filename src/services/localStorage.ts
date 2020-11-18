const IS_GDPR_ACCEPTED = 'trelobifteki.com:isGdprAccepted';

export default {
  isGdprAccepted() {
    if (window && window.localStorage) {
      const value = window.localStorage[IS_GDPR_ACCEPTED];
      return value === 'true';
    }

    return false;
  },

  acceptGdpr() {
    if (window && window.localStorage) {
      window.localStorage[IS_GDPR_ACCEPTED] = true;
    }
  },
}
