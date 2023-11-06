import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import kz from "./locales/kz.json";

function loadLocaleMessages() {
  const locales = [{ en: en }, { ru: ru }, { kz: kz }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

export default createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages: loadLocaleMessages(),
});
