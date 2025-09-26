import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './i18n/config';
import { GB, IT } from 'country-flag-icons/react/3x2'



// Añade este componente para el selector de idioma
const LanguageSelector: React.FC = () => {
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
//////////////////////////////////////////////////////

const galleryImages = [
  {
    id: 1,
    src: "/images/foto13.jpg",
    alt: "Australian Labradoodle jugando en el jardín"
  },
  {
    id: 2,
    src: "/images/foto2.jpg",
    alt: "Cachorro Labradoodle chocolate"
  },
  {
    id: 3,
    src: "/images/foto3.jpg",
    alt: "Labradoodle adulto color crema"
  },
  {
    id: 4,
    src: "/images/foto9.jpg",
    alt: "Familia de Labradoodles"
  },
  {
    id: 5,
    src: "/images/foto5.jpg",
    alt: "Labradoodle corriendo en la playa"
  },
  {
    id: 6,
    src: "/images/foto6.jpg",
    alt: "Cachorro Labradoodle durmiendo"
  },
  {
    id: 7,
    src: "/images/foto9.jpg",
    alt: "Labradoodle en sesión de entrenamiento"
  },
  {
    id: 8,
    src: "/images/foto12.jpg",
    alt: "Labradoodle con pelaje rizado"
  },
  {
    id: 9,
    src: "/images/foto12.jpg",
    alt: "Labradoodle en el parque"
  },
  {
    id: 10,
    src: "/images/labradoodle-1.jpg",
    alt: "Cachorro Labradoodle explorando"
  },
  {
    id: 11,
    src: "/images/foto9.jpg",
    alt: "Labradoodle con juguete"
  },
  {
    id: 12,
    src: "/images/foto13.jpg",
    alt: "Labradoodle posando para la cámara"
  },
];

const faqs = [
  {
    q: "¿Qué es un Australian Labradoodle?",
    a: "Es una raza desarrollada para compañía y terapia, reconocida por su temperamento estable, inteligencia y pelaje hipoalergénico en muchos casos.",
  },
  {
    q: "¿Cuándo se entregan los cachorros?",
    a: "Generalmente entre los 65 y 70 días, con desparasitación y plan de vacunación al día, además de un kit de bienvenida.",
  },
  {
    q: "¿Ofrecen acompañamiento post-adopción?",
    a: "Sí, brindamos guía en las primeras etapas de adaptación y recomendaciones de educación, peluquería y veterinarios.",
  },
];

const SectionTitle: React.FC<{ title: string; subtitle?: string; id?: string }> = ({ title, subtitle, id }) => (
  <div id={id} className="max-w-5xl mx-auto text-center mb-10">
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
        className="text-muted-foreground mt-2"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

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
    className="h-16 w-16 md:h-20 md:w-20"
  />
  <span className="font-bold text-sm sm:text-base md:text-xl"> 
    Borgo dei Doodle
  </span>
</a>

    {/* Navegación desktop */}
    <nav className="hidden md:flex items-center text-sm">
      <NavLink href="#inicio">{t('nav.home')}</NavLink>
      <NavLink href="#so-doodle">{t('nav.about')}</NavLink>
      <NavLink href="#nuestros-perros">{t('nav.dogs')}</NavLink>
      <NavLink href="#la-raza">{t('nav.breed')}</NavLink>
      <NavLink href="#faq">{t('nav.faq')}</NavLink>
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

      {/* Hero */}
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
          <a href="#nuestros-perros">
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

      {/* So Doodle / Sobre mí */}
<section id="so-doodle" className="px-4 py-20 bg-muted/30">
  <SectionTitle
    title={t('soDoodle.title')}
    subtitle={t('soDoodle.subtitle')}
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

<section id="nuestros-perros" className="px-4 py-20">
  <SectionTitle 
    title={t('dogs.title')} 
    subtitle={t('dogs.subtitle')} 
  />
  
  <div className="max-w-7xl mx-auto">
    {/* Galería responsiva */}
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

{/* La Raza */}
<section id="la-raza" className="px-4 py-20 bg-muted/30">
  <SectionTitle
    title={t('breed.title')}
    subtitle={t('breed.subtitle')}
  />
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
    <div className="space-y-3">
      <p className="text-muted-foreground">
        {t('breed.description')}
      </p>
      <p className="text-muted-foreground">
        {t('breed.description2')}
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        <li className="p-3 rounded-xl bg-background border">
          {t('breed.features.natale')}
        </li>
        <li className="p-3 rounded-xl bg-background border">
          {t('breed.features.color')}
        </li>
        <li className="p-3 rounded-xl bg-background border">
          {t('breed.features.coat')}
        </li>
        <li className="p-3 rounded-xl bg-background border">
          {t('breed.features.size')}
        </li>
        <li className="p-3 rounded-xl bg-background border">
          {t('breed.features.weight')}
        </li>
        <li className="p-3 rounded-xl bg-background border">
          {t('breed.features.lifespan')}
        </li>
      </ul>
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

{/* FAQ */}
<section id="faq" className="px-4 py-20">
  <SectionTitle 
    title={t('faq.title')} 
    subtitle={t('faq.subtitle')} 
  />
  <div className="max-w-3xl mx-auto">
    <Accordion type="single" collapsible className="w-full">
      {t('faq.questions', { returnObjects: true }).map((faq: { q: string; a: string }, i: number) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>

{/* Contacto */}
<section id="contacto" className="px-4 py-20 bg-muted/30">
  <SectionTitle 
    title={t('contact.title')} 
    subtitle={t('contact.subtitle')} 
  />
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
    <Card className="rounded-2xl">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>hola@borgodidoogle.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+34000000000</span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-accent">
            <Instagram className="h-4 w-4"/>Instagram
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-accent">
            <Facebook className="h-4 w-4"/>Facebook
          </a>
        </div>
      </CardContent>
    </Card>
    <Card className="rounded-2xl">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">{t('contact.form.title')}</h3>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <Input 
            placeholder={t('contact.form.name')} 
            required 
          />
          <Input 
            type="email" 
            placeholder={t('contact.form.email')} 
            required 
          />
          <Input 
            placeholder={t('contact.form.phone')} 
          />
          <Textarea 
            placeholder={t('contact.form.message')} 
            rows={5} 
          />
          <Button type="submit" className="rounded-2xl w-full">
            {t('contact.form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</section>

      {/* Footer */}
     {/* Footer */}
<footer className="border-t">
  <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
    <div>{t('footer.rights')}</div>
    <div className="flex gap-4">
      <a href="#so-doodle" className="hover:underline">{t('footer.links.about')}</a>
      <a href="#faq" className="hover:underline">{t('footer.links.faq')}</a>
      <a href="#contacto" className="hover:underline">{t('footer.links.contact')}</a>
    </div>
  </div>
</footer>

      {/* Scroll suave */}
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


