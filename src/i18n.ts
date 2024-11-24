import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import mc from './locales/mc.json';

const languageFromStorage = localStorage.getItem('language');
const initialLanguage = languageFromStorage ? languageFromStorage : 'es';

const i18n = createI18n({
    legacy: false,
    locale: initialLanguage,
    fallbackLocale: 'es',
    messages: { en, es, zh, mc },
});

export default i18n;