import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <div>{t('footer.rights')}</div>
        <div className="flex gap-4">
          <a href="#so-doodle" className="hover:underline">
            {t('footer.links.about')}
          </a>
          <a href="#i-nostri-cani" className="hover:underline">
            {t('footer.links.faq')}
          </a>
          <a href="#contacto" className="hover:underline">
            {t('footer.links.contact')}
          </a>
        </div>
      </div>
    </footer>
  );
};