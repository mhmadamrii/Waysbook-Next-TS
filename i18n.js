import i18n from "i18next";
import en from "./translation/en.json"
import cek from "./translation/cek.json"

const resources = {
  en: { translation: en },
  in: { translation:  cek},
};

console.log("resources", resources.en)

i18n.init({
  lng: "en",
  resources,
});

export default i18n;
