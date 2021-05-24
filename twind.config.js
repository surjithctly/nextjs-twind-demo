/** @type {import('twind').Configuration} */
import hash from '@emotion/hash';

let minify = () => {
  if (process.env.NODE_ENV === 'production') {
    return string => 'w3t-' + hash(string);
  }
  return false;
};
export default {
  // hash: true,
  hash: minify(),
  theme: {
    extend: {
      screens: {
        standalone: { raw: '(display-mode:standalone)' }
      }
    }
  }
};
