import livingImg from '../assets/images/living.jpg';
import kitchenImg from '../assets/images/kitchen.jpg';
import bedroomImg from '../assets/images/bedroom.jpg';
import bathroomImg from '../assets/images/bathroom.jpg';
import diningImg from '../assets/images/dining.jpg';
import img1 from '../assets/images/IMG-20250421-WA0003.jpg';
import img2 from '../assets/images/IMG-20250421-WA0007.jpg';
import img3 from '../assets/images/IMG-20250421-WA0011.jpg';
import img4 from '../assets/images/IMG-20250421-WA0016.jpg';
import img5 from '../assets/images/IMG-20250421-WA0021.jpg';
import img6 from '../assets/images/IMG-20250421-WA0023.jpg';
import img7 from '../assets/images/IMG-20250513-WA0013.jpg';
import img8 from '../assets/images/IMG-20250513-WA0021.jpg';
import img9 from '../assets/images/IMG-20250513-WA0030.jpg';
import img10 from '../assets/images/IMG-20250513-WA0006.jpg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ProjectGallery = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const mainProjects = [
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
      image: bathroomImg,
      title: t('services.projects.categories.bathroom'),
      category: t('services.projects.categories.bathroom')
    },
    {
      image: diningImg,
      title: t('services.projects.categories.dining'),
      category: t('services.projects.categories.dining')
    },
    {
      image: img10, title: 'Proyecto 10'
    }
  ];

  const extraImages = [
    { image: img1, title: 'Proyecto 1' },
    { image: img2, title: 'Proyecto 2' },
    { image: img3, title: 'Proyecto 3' },
    { image: img4, title: 'Proyecto 4' },
    { image: img5, title: 'Proyecto 5' },
    { image: img6, title: 'Proyecto 6' },
    { image: img7, title: 'Proyecto 7' },
    { image: img8, title: 'Proyecto 8' },
    { image: img9, title: 'Proyecto 9' }
  ];

  const allProjects = [...mainProjects, ...extraImages];
  const projectsToShow = showAll ? allProjects : mainProjects;

  return (
    <div className="mt-20">
      <h2 className="section-title text-primary text-center">{t('services.projects.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projectsToShow.map((project, index) => (
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
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;