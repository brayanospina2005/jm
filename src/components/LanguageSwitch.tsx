import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSwitch;