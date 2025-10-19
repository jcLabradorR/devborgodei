import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Mail, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="px-4 py-20 bg-muted/30">
      <SectionTitle 
        title={t('contact.title')} 
        subtitle={t('contact.subtitle')}
        marginBottom="small"
      />
      <div className="max-w-5xl mx-auto mb-4" style={{ textAlign: 'center' }}>
        <div className="p-4 rounded-xl inline-block">
          <p className="text-2xl text-foreground font-bold italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Sofia
          </p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hola@borgodidoogle.com</span>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/australian.labradoodle.italia?utm_source=qr&igsh=NXV2bnJjenRuNWE=" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-accent" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4"/>Instagram
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">{t('contact.form.title')}</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder={t('contact.form.name')} required />
              <Input type="email" placeholder={t('contact.form.email')} required />
              <Input placeholder={t('contact.form.phone')} />
              <Textarea placeholder={t('contact.form.message')} rows={5} />
              <Button type="submit" className="rounded-2xl w-full">
                {t('contact.form.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};