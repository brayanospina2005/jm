import livingImg from '../assets/images/living.jpg';
import kitchenImg from '../assets/images/kitchen.jpg';
import bedroomImg from '../assets/images/bedroom.jpg';
import officeImg from '../assets/images/office.jpg';
import bathroomImg from '../assets/images/bathroom.jpg';
import diningImg from '../assets/images/dining.jpg';
import { useTranslation } from 'react-i18next';

const ProjectGallery = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: livingImg,
      title: t('services.projects.categories.living'),
      category: t('services.projects.categories.living')
    },
    {
      image: kitchenImg,
      title: t('services.projects.categories.kitchen'),
      category: t('services.projects.categories.kitchen')
    },
    {
      image: bedroomImg,
      title: t('services.projects.categories.bedroom'),
      category: t('services.projects.categories.bedroom')
    },
    {
      image: officeImg,
      title: t('services.projects.categories.office'),
      category: t('services.projects.categories.office')
    },
    {
      image: bathroomImg,
      title: t('services.projects.categories.bathroom'),
      category: t('services.projects.categories.bathroom')
    },
    {
      image: diningImg,
      title: t('services.projects.categories.dining'),
      category: t('services.projects.categories.dining')
    }
  ];

  return (
    <div className="mt-20">
      <h2 className="section-title text-primary text-center">{t('services.projects.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;