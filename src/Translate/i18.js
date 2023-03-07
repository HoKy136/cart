import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import TransVN from './locales/vi/index.json';
import TransEN from './locales/en/index.json';

const resources = {
    en: {
        translation: TransEN
    },
    vi: {
        translation: TransVN
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    
    .init({
        resources,
        fallbackLng: 'vi',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
        
    });

export default i18n;
