import { useTranslation } from 'react-i18next';
import quienesSomosImg from '../assets/images/imagen quienes somos.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={quienesSomosImg}
              alt="Interior elegante y moderno"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="section-title text-primary">{t('about.title')}</h2>
            <p className="text-neutral-custom mb-6">
              {t('about.content1')}
            </p>
            <p className="text-neutral-custom">
              {t('about.content2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;