import MexicoFlag from '@/components/flags/Mexico.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';

export const LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    label: 'EN',
    flag: UnitedStatesFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    label: 'ES',
    flag: MexicoFlag,
  },
};
export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: 'es',
  en: 'en',
};
