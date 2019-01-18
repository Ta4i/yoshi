import i18next from 'i18next';
import i18nextXHRBackend from 'i18next-xhr-backend';

export default function i18n({ locale, baseUrl = '' }) {
  i18next.use(i18nextXHRBackend).init({
    lng: locale,
    fallbackLng: 'en',
    keySeparator: '$',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${baseUrl}assets/locale/messages_{{lng}}.json`,
      crossDomain: true,
    },
  })
    .catch(error => {throw new Error(error)});
  return i18next;
}
