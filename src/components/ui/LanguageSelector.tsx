import React from 'react';
import { useTranslation } from 'react-i18next';
import { GB, IT } from 'country-flag-icons/react/3x2';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => i18n.changeLanguage('it')}
        className={`px-2 py-1 rounded-xl border ${
          i18n.language === 'it' ? 'bg-accent' : 'bg-background'
        } hover:bg-accent/50 transition-colors`}
        aria-label="Italiano"
      >
        <IT className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded-xl border ${
          i18n.language === 'en' ? 'bg-accent' : 'bg-background'
        } hover:bg-accent/50 transition-colors`}
        aria-label="English"
      >
        <GB className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
};