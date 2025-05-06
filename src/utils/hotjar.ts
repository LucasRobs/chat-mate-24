
import Hotjar from '@hotjar/browser';

export const initHotjar = () => {
  const siteId = 6394624;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);
};
