
import Hotjar from '@hotjar/browser';

// Read configuration from Vite env variables. Use VITE_ prefix so they are
// available at build/runtime via import.meta.env.
const siteId = Number(import.meta.env.VITE_HOTJAR_ID);
const hotjarVersion = Number(import.meta.env.VITE_HOTJAR_VERSION ?? 6);

export const initHotjar = () => {
  // Only run in the browser and when a valid site id is provided.
  if (typeof window === 'undefined') return;
  if (!siteId) return;

  try {
    Hotjar.init(siteId, hotjarVersion);
  } catch (err) {
    // Non-fatal: don't break the app if Hotjar fails to initialize.
    // Prefer a console warning for debugging.
    // eslint-disable-next-line no-console
    console.warn('Hotjar init failed', err);
  }
};
