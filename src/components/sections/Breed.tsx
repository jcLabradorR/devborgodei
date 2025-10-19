import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useTranslation } from 'react-i18next';

export const Breed: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="la-raza" className="px-4 py-20">
      <SectionTitle
        title={t('breed.title')}
        subtitle={t('breed.subtitle')}
        subtitleSize="large"
      />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('breed.description')}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('breed.description2')}
          </p>
        </div>
        <div className="relative h-[320px] md:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/foto113.jpg"
            alt="Labradoodle mirando a cámara"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};