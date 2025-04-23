import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-bodoni text-2xl font-bold mb-4">Elegance Interiors</h2>
            <p className="text-gray-300 mb-6">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575100486361" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/jmreformasyacabados_/?__pwa=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@jmreformasyacabados" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bodoni text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-gray-300 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-gray-300 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bodoni text-lg font-semibold mb-4">{t('footer.workingHours')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('footer.schedule.weekdays')}</li>
              <li>{t('footer.schedule.saturday')}</li>
              <li>{t('footer.schedule.sunday')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Elegance Interiors. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;