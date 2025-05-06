
import { init } from '@hotjar/browser';

export const initHotjar = () => {
  const siteId = 6394624;
  const hotjarVersion = 6;

  init(siteId, hotjarVersion);
};
