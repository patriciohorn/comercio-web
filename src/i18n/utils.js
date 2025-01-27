import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function useTranslatedPath(lang) {
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

// export function getRouteFromUrl(url) {
//   const pathname = new URL(url).pathname;
//   const parts = pathname?.split('/');
//   const path = parts.pop() || parts.pop();

//   if (path === undefined) {
//     return undefined;
//   }

//   const currentLang = getLangFromUrl(url);

//   if (defaultLang === currentLang) {
//     const route = Object.values(routes)[0];
//     return route[path] !== undefined ? route[path] : undefined;
//   }

//   const getKeyByValue = (obj, value) => {
//     return Object.keys(obj).find((key) => obj[key] === value);
//   };

//   const reversedKey = getKeyByValue(routes[currentLang], path);

//   if (reversedKey !== undefined) {
//     return reversedKey;
//   }

//   return undefined;
// }
