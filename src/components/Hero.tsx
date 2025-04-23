import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import heroVideo from '../assets/videos/hero-video.mp4';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h1 className="font-bodoni text-5xl md:text-7xl font-bold text-primary mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-neutral-custom text-lg mb-8">
              {t('hero.subtitle')}
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              {t('hero.cta')}
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="md:col-span-7 relative aspect-video rounded-lg shadow-xl overflow-hidden">
            <ReactPlayer
              url={heroVideo}
              width="100%"
              height="100%"
              playing
              loop
              muted
              playsinline
              className="absolute top-0 left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;