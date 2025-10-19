import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useTranslation } from 'react-i18next';

const galleryImages = [
  { id: 1, src: "/images/foto33.jpg", alt: "cachorro" },
  { id: 2, src: "/images/foto26.jpg", alt: "Cachorro Labradoodle chocolate" },
  { id: 3, src: "/images/foto21.jpg", alt: "Labradoodle adulto color crema" },
  { id: 4, src: "/images/foto3.jpg", alt: "lola" },
  { id: 5, src: "/images/foto6.jpg", alt: "Labradoodle corriendo en la playa" },
  { id: 6, src: "/images/foto23.jpg", alt: "Cachorro Labradoodle durmiendo" },
  { id: 7, src: "/images/foto22.jpg", alt: "Labradoodle en sesión de entrenamiento" },
  { id: 8, src: "/images/foto9.jpg", alt: "Labradoodle con pelaje rizado" },
  { id: 9, src: "/images/foto24.jpg", alt: "Labradoodle en el parque" },
  { id: 10, src: "/images/foto12.jpg", alt: "Cachorro Labradoodle explorando" },
  { id: 11, src: "/images/foto25.jpg", alt: "Labradoodle con juguete" },
  { id: 12, src: "/images/foto13.jpg", alt: "Labradoodle posando para la cámara" },
];

export const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="galleria" className="px-4 py-20 bg-muted/30">
      <SectionTitle title={t('dogs.title')} />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: image.id * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};