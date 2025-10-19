import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useTranslation } from 'react-i18next';

export const INostriCani: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="i-nostri-cani" className="px-4 py-20">
      <SectionTitle
        title={t('iNostriCani.title')}
        subtitle={t('iNostriCani.subtitle')}
        subtitleSize="large"
      />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="relative h-[320px] md:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
          <img
            src="/images/foto134.jpg"
            alt="Australian Labradoodle en familia"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-4 order-1 md:order-2">
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
            {t('iNostriCani.description')}
          </p>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
            {t('iNostriCani.description2')}
          </p>
        </div>
      </div>
    </section>
  );
};