import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import './i18n/config';

import { Hero } from "@/components/sections/Hero";
import { SoDoodle } from "@/components/sections/SoDoodle";
import { INostriCani } from "@/components/sections/INostriCani";
import { Gallery } from "@/components/sections/Gallery";
import { Breed } from "@/components/sections/Breed";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import { LanguageSelector } from "@/components/ui/LanguageSelector";

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 rounded-xl hover:bg-accent transition-colors"
  >
    {children}
  </a>
);

export default function SodoodleStyleSite() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img 
              src="/images/logo.png"
              alt="So Doodle Logo"
              className="h-18 w-18 md:h-28 md:w-28"
            />
            <span className="font-bold text-sm sm:text-base md:text-xl"> 
              Borgo dei Doodle
            </span>
          </a>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center text-sm">
            <NavLink href="#inicio">{t('nav.home')}</NavLink>
            <NavLink href="#so-doodle">{t('nav.about')}</NavLink>
            <NavLink href="#i-nostri-cani">{t('nav.nostri')}</NavLink>
            <NavLink href="#galleria">{t('nav.galleria')}</NavLink>
            <NavLink href="#la-raza">{t('nav.breed')}</NavLink>
            <NavLink href="#contacto">{t('nav.contact')}</NavLink>
          </nav>

          {/* Selector de idioma y botón */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSelector />
            <Button 
              asChild 
              size="sm" 
              className="rounded-2xl hidden sm:flex"
            >
              <a href="#contacto">{t('nav.wantPuppy')}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Secciones */}
      <Hero />
      <SoDoodle />
      <INostriCani />
      <Gallery />
      <Breed />
      <Contact />

      <Footer />

      <script dangerouslySetInnerHTML={{
        __html: `
          document.querySelectorAll('a[href^="#"]').forEach(a=>{
            a.addEventListener('click', (e)=>{
              const href = a.getAttribute('href');
              if(href && href.length > 1){
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
              }
            })
          })
        `,
      }} />
    </div>
  );
}


