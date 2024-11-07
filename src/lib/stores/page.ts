// src/stores/pathname.js
import { writable } from 'svelte/store';

export const pathname = writable('');

if (typeof window !== 'undefined') {
  pathname.set(window.location.pathname);
  const updatePathname = () => pathname.set(window.location.pathname);
  window.addEventListener('popstate', updatePathname);
}
