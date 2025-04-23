import { PencilRuler, Box, HardHat, Brush } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProjectGallery from './ProjectGallery';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <PencilRuler className="w-8 h-8 text-primary" />,
      title: t('services.items.design.title'),
      description: t('services.items.design.description')
    },
    {
      icon: <Box className="w-8 h-8 text-primary" />,
      title: t('services.items.remodeling.title'),
      description: t('services.items.remodeling.description')
    },
    {
      icon: <HardHat className="w-8 h-8 text-primary" />,
      title: t('services.items.furniture.title'),
      description: t('services.items.furniture.description')
    },
    {
      icon: <Brush className="w-8 h-8 text-primary" />,
      title: t('services.items.consultation.title'),
      description: t('services.items.consultation.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-off-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="section-title text-primary text-center">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-white/20"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-bodoni text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-custom">{service.description}</p>
            </div>
          ))}
        </div>
        
        <ProjectGallery />
      </div>
    </section>
  );
}

export default Services;