import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useTranslation } from 'react-i18next';

export const SoDoodle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="so-doodle" className="px-4 py-20 bg-muted/30">
      <SectionTitle
        title={t('soDoodle.title')}
      />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-3">
            <h3 className="text-xl font-semibold">{t('soDoodle.ourStory')}</h3>
            <p className="text-muted-foreground">
              {t('soDoodle.description')}
            </p>
            <p className="text-muted-foreground">
              {t('soDoodle.description2')}
            </p>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-3">
            <h3 className="text-xl font-semibold">{t('soDoodle.delivery.title')}</h3>
            <p className="text-muted-foreground">
              {t('soDoodle.delivery.description')}
            </p>
            <p className="text-muted-foreground">
              {t('soDoodle.delivery.description2')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};