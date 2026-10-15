import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { Brain, HeartPulse, Baby, UsersRound, Video, MapPin, ReceiptText, Menu, X, Plus, Instagram, Star, ExternalLink } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { faqs, googleRating, googleReviewsUrl, inPersonDescription, instagramUrl, ogImageUrl, openingHours, professionalRegistration, psychologistSchema, reviews, siteUrl, specialties, whatsappUrl } from '@/lib/nair-content';
import portrait from '@/assets/nair-novo-recorte.png';
import aboutPhoto from '@/assets/nair-sobre.jpg';

const title = 'Psicóloga TCC em Brasília | Online e Presencial | Nair Guimarães';
const description = 'Psicóloga e psicólogo em Brasília com terapia cognitivo-comportamental (TCC) online e presencial. Ansiedade, depressão, crianças, adolescentes e adultos.';
export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: siteUrl },
      { property: 'og:site_name', content: 'Nair Guimarães – Psicóloga' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:image', content: ogImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: ogImageUrl },
    ],
    links: [{ rel: 'canonical', href: siteUrl }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(psychologistSchema) }],
  }),
  component: Index,
});
const navigation = [['Início', 'inicio'], ['Sobre mim', 'sobre'], ['Avaliações', 'avaliacoes'], ['Especialidades', 'especialidades'], ['Como funciona', 'como-funciona'], ['FAQ', 'faq']];
const specialtyIcons = [Brain, HeartPulse, Baby, UsersRound];
const services = [
  { icon: Video, title: 'Atendimento online', text: 'Sessões por videochamada, com sigilo e conforto, de onde você estiver.' },
  { icon: MapPin, title: 'Presencial em Brasília', text: inPersonDescription },
  { icon: ReceiptText, title: 'Recibo para reembolso', text: 'Emitimos recibo para você solicitar o reembolso ao seu plano de saúde.' },
];
function Stars({ className = '' }: { className?: string }) {
  return <span className={`stars ${className}`} aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} fill="currentColor" strokeWidth={0}/>)}</span>;
}
function GoogleIcon() {
  return <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7Z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24Z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1Z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9Z"/></svg>;
}
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.5-4.7A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8 7.5c.4-.4 1 .1 1.4 1s.2 1.2-.3 1.6c.7 1.5 1.8 2.6 3.4 3.3.4-.6.8-1 1.4-.7l1.6.8c.7.4.1 1.8-.6 2-2.4.8-7.7-3.5-7.9-6.2-.1-.8.4-1.4 1-1.8Z"/></svg>;
}
function Appointment({ compact = false }: { compact?: boolean }) {
  return <Button asChild className={`appointment ${compact ? 'appointment-small' : ''}`}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{!compact && <WhatsAppIcon className="whatsapp-icon"/>}{compact ? 'Agendar' : 'Agendar pelo WhatsApp'}</a></Button>;
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    mainRef.current?.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <>
    <header className="site-header">
      <div className="page-width header-inner">
        <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-psi">Ψ</span><span>Nair Guimarães | Psicóloga</span></a>
        <nav className="desktop-nav" aria-label="Menu principal">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}<Appointment compact/></nav>
        <Button className="menu-toggle" size="icon" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
      </div>
      {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Menu no celular">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<Appointment compact/></nav>}
    </header>
    <main ref={mainRef}>
      <section id="inicio" className="hero">
        <div className="page-width hero-inner">
          <div className="hero-copy"><h1>Psicóloga<br/>Nair Guimarães</h1><p>Terapia Cognitivo-Comportamental online<br className="desktop-break"/> e presencial em Brasília.</p><div className="hero-actions"><Appointment/><span className="hero-psi" aria-hidden="true">Ψ</span></div></div>
          <div className="hero-photo"><img className="desktop-portrait" src={portrait} alt="Psicóloga Nair Guimarães, de óculos e blazer preto" fetchPriority="high"/><div className="portrait-arch"><img src={portrait} alt="Psicóloga Nair Guimarães, de óculos e blazer preto" fetchPriority="high"/></div></div>
        </div>
      </section>
      <section id="especialidades" className="specialties section-offwhite"><div className="page-width reveal"><h2>Como posso te ajudar</h2><p className="mobile-subtitle">Áreas de atuação e principais demandas</p><div className="specialty-grid">{specialties.map((item, i) => { const Icon = specialtyIcons[i]; return <article className="specialty-card" key={item.title}>{Icon && <Icon strokeWidth={1.15}/>}<div><h3>{item.title}</h3><p>{item.description}</p></div></article>; })}</div></div></section>
      <section id="sobre" className="about section-cream"><div className="page-width about-inner reveal"><h2 className="mobile-about-title">Sobre mim</h2><img className="about-photo" src={aboutPhoto} alt="Retrato da psicóloga Nair Guimarães em seu consultório" loading="lazy"/><div className="about-copy"><h2>Sobre mim</h2><h3>Olá, sou a Nair Guimarães</h3><p>Sou psicóloga clínica e acredito que cada pessoa merece um espaço seguro para ser ouvida com empatia e respeito. Minha prática é guiada pela Terapia Cognitivo-Comportamental, uma abordagem com base científica que ajuda a compreender pensamentos, emoções e comportamentos. Sou graduada em Psicologia pela Faculdade Anhanguera, especialista em TCC pelo IPOG e em Análise do Comportamento e ABA pela FAPSI, e estou em formação em Neuropsicologia e ABA pela PUC-GO.</p><div className="credentials"><span>Especialista em TCC</span><span>Análise do Comportamento e ABA</span></div></div></div></section>
      <section id="avaliacoes" className="reviews section-offwhite"><div className="page-width reveal">
        <h2>O que dizem os pacientes</h2>
        <p className="rating-summary"><GoogleIcon/><strong className="rating-score">{googleRating.score}</strong><Stars/><span className="sr-only">de 5 estrelas,</span><span className="rating-count">{googleRating.count} avaliações no Google</span></p>
        <ul className="review-list">{reviews.map(review => <li className="review-card" key={review.author}><figure><Stars className="review-stars"/><blockquote><p>{review.text}</p></blockquote><figcaption>{review.author}<span>avaliação no Google</span></figcaption></figure></li>)}</ul>
        <Button asChild variant="outline" className="reviews-link"><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer"><GoogleIcon/>Ver todas as avaliações no Google<ExternalLink strokeWidth={1.6}/></a></Button>
      </div></section>
      <section id="como-funciona" className="how-it-works"><div className="page-width reveal"><h2>Como funciona</h2><div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service" key={title}><Icon strokeWidth={1.2}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><div className="opening-hours"><h3>Horários de atendimento</h3>{openingHours.map(hours => <p key={hours.label}>{hours.label}: {hours.closed ? 'fechado' : `${hours.opens.replace(':00', 'h')} às ${hours.closes.replace(':00', 'h')}`}</p>)}</div></div></section>
      <section id="faq" className="faq section-offwhite"><div className="page-width reveal"><h2>Dúvidas frequentes</h2><Accordion type="single" collapsible className="faq-list">{faqs.map((item, i) => <AccordionItem value={`faq-${i}`} key={item.question} className="faq-item"><AccordionPrimitive.Header><AccordionPrimitive.Trigger className="faq-trigger">{item.question}<Plus strokeWidth={1.5}/></AccordionPrimitive.Trigger></AccordionPrimitive.Header><AccordionContent className="faq-answer">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
      <section className="final-call"><div className="page-width reveal"><h2>Dê o primeiro passo para cuidar de você</h2><p>Buscar ajuda é um ato de coragem e de cuidado consigo mesmo.</p><Appointment/></div></section>
    </main>
    <footer className="site-footer"><div className="page-width"><a className="footer-brand" href="#inicio"><span aria-hidden="true">Ψ </span>Nair Guimarães | Psicóloga</a><p className="registration">{professionalRegistration}</p><div className="social-links"><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram strokeWidth={1.5}/></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon/></a></div><p className="crisis-notice">Este site não oferece atendimento de urgência.<br className="mobile-only"/> Em situação de crise, ligue para o CVV no <a href="tel:188">188</a>.</p><p className="copyright">© 2026 Nair Guimarães. Todos os direitos reservados.</p></div></footer>
  </>;
}
