import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
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