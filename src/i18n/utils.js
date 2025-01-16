import { ui, defaultLang, showDefaultLang } from './ui';

export function useTranslatedPath() {
  return function translatePath(path, l = lang) {
    return !showDefaultLang && l === defaultLang
      ? path
      : `/${l}${path}`;
  };
}

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}
