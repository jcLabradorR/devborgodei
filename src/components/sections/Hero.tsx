import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#galleria">
                {t('hero.buttons.seeLitters')}
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-2xl">
              <a href="#la-raza">
                {t('hero.buttons.knowBreed')}
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/images/labradoodle-1.jpg"
            alt="Australian Labradoodle feliz"
            className="w-full h-[360px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};