import AES from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';

const $secretKey = '$AuthInfoLock$';

const lStorage = {
  set: (key, val) => {
    const stringfyVal = JSON.stringify(val);

    const encriptData = AES.encrypt(stringfyVal, $secretKey).toString();

    localStorage.setItem(key, encriptData);
  },

  get: key => {
    const val = localStorage.getItem(key);

    if (val) {
      const bytes = AES.decrypt(val, $secretKey);
      const originalText = bytes.toString(enc.Utf8);
      return JSON.parse(originalText);
    }

    return '';
  },

  remove: key => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

const sStorage = {
  set: (key, val) => {
    sessionStorage.setItem(key, val);
  },

  get: key => {
    const val = sessionStorage.getItem(key);
    return JSON.parse(val);
  },

  remove: key => {
    sessionStorage.removeItem(key);
  },

  clear: key => {
    sessionStorage.clear(key);
  },
};

export { lStorage, sStorage };
