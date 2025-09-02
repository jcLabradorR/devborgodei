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
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage('it')}
        className={`px-2 py-1 rounded-xl border ${i18n.language === 'it' ? 'bg-accent' : 'bg-background'}`}
      >
        <IT className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded-xl border ${i18n.language === 'en' ? 'bg-accent' : 'bg-background'}`}
      >
        <GB className="w-4 h-4" />
      </button>
    </div>
  );
};

const dogs = [
  {
    name: "Luna",
    size: "Medium",
    color: "Caramelo",
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200",
  },
  {
    name: "Milo",
    size: "Mini",
    color: "Chocolate",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200",
  },
  {
    name: "Nala",
    size: "Standard",
    color: "Crema",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200",
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

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="px-3 py-2 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors">
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
          <a href="#inicio" className="flex items-center gap-2 font-bold text-xl">
  <img 
    src="/images/logo.png" // Asegúrate de guardar la imagen en la carpeta public
    alt="So Doodle Logo este"
    className="h-20 w-20" // Ajusta el tamaño según necesites
  />
  <span>Borgo dei Doodle</span>
</a>
          <nav className="hidden md:flex items-center text-sm">
            <NavLink href="#inicio">{t('nav.home')}</NavLink>
            <NavLink href="#so-doodle">{t('nav.about')}</NavLink>
            <NavLink href="#nuestros-perros">{t('nav.dogs')}</NavLink>
            <NavLink href="#la-raza">{t('nav.breed')}</NavLink>
            <NavLink href="#faq">{t('nav.faq')}</NavLink>
            <NavLink href="#contacto">{t('nav.contact')}</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSelector /> {/* Añadir el selector aquí */}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contacto">{t('nav.wantPuppy')}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#nuestros-perros">Ver camadas</a>
              </Button>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href="#la-raza">Conocer la raza</a>
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
          title="Encontrando el sentido: cuando el amor se transforma en misión"
          subtitle="Más de 10 años criando con ética, priorizando el bienestar emocional y físico de cada cachorro y su familia."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">Sobre mí</h3>
              <p className="text-muted-foreground">
                Soy criadora y facilitadora en intervenciones asistidas por animales. Selecciono familias con
                compromiso y acompaño durante los primeros 65 días con educación, socialización y guía.
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Cría en casa con estimulación neurológica temprana</li>
                <li>Plan de vacunación al día y desparasitación</li>
                <li>Kit de adopción completo y seguimiento</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">Entrega del cachorro</h3>
              <p className="text-muted-foreground">
                Entregamos entre los 65/70 días con todo lo necesario para una integración suave. También
                contamos con recomendaciones de educación, peluquería y veterinaria.
              </p>
              <div className="flex gap-3">
                <Button asChild variant="outline" className="rounded-2xl"><a href="#contacto">Consultar disponibilidad</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nuestros Perros */}
      <section id="nuestros-perros" className="px-4 py-20">
        <SectionTitle title="Nuestros Perros" subtitle="Ejemplos de tamaños y mantos" />
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dogs.map((d) => (
            <Card key={d.name} className="rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img src={d.img} alt={d.name} className="w-full h-56 object-cover rounded-t-2xl" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{d.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted">{d.size}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Color: {d.color}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* La Raza */}
      <section id="la-raza" className="px-4 py-20 bg-muted/30">
        <SectionTitle
          title="La Raza: Australian Labradoodle"
          subtitle="Perros de familia y de terapia: inteligencia, estabilidad emocional y convivencia amable."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Los Australian Labradoodles se caracterizan por su temperamento equilibrado, alta sociabilidad y
              facilidad para el aprendizaje. Suelen presentar baja muda de pelo y son aptos para familias activas.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li className="p-3 rounded-xl bg-background border">Hipoalergénicos (en muchos casos)</li>
              <li className="p-3 rounded-xl bg-background border">Altamente entrenables</li>
              <li className="p-3 rounded-xl bg-background border">Ideales para terapia/acompañamiento</li>
              <li className="p-3 rounded-xl bg-background border">Esperanza de vida 12–15 años</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1600"
            alt="Labradoodle mirando a cámara"
            className="w-full h-[320px] object-cover rounded-2xl shadow"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-20">
        <SectionTitle title="Preguntas Frecuentes" subtitle="Todo lo esencial antes de adoptar" />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-4 py-20 bg-muted/30">
        <SectionTitle title="Contacto" subtitle="Agenda una llamada o escríbenos por redes" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hola@tudoodle.cl</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+56 9 1234 5678</span></div>
              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-accent"><Instagram className="h-4 w-4"/>Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-accent"><Facebook className="h-4 w-4"/>Facebook</a>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">Escríbenos</h3>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Nombre" required />
                <Input type="email" placeholder="Email" required />
                <Input placeholder="Teléfono" />
                <Textarea placeholder="Cuéntanos sobre tu familia y estilo de vida" rows={5} />
                <Button type="submit" className="rounded-2xl w-full">Enviar consulta</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} por TuDoodle. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a href="#so-doodle" className="hover:underline">So Doodle</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
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


