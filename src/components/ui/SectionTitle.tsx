import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  subtitleSize?: 'default' | 'large';
  marginBottom?: 'default' | 'small'; // Nueva prop
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  id, 
  subtitleSize = 'default',
  marginBottom = 'default' // Valor por defecto
}) => (
  <div id={id} className={`max-w-5xl mx-auto text-center ${
    marginBottom === 'small' ? 'mb-1' : 'mb-10'
  }`}>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-muted-foreground mt-2 ${
          subtitleSize === 'large' 
            ? 'text-base md:text-lg lg:text-xl leading-relaxed'
            : 'text-sm md:text-base'
        }`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);