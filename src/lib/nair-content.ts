export const minimumChildAge = 7;
export const siteUrl = 'https://psicologaonlineepresencial.com.br';
export const ogImageUrl = `${siteUrl}/og-image.jpg`;
export const whatsappNumber = '5561995169116';
export const professionalRegistration = 'CRP 01/25080';
export const instagramUrl = 'https://www.instagram.com/psicologanaircguimaraes';
export const openingHours = [
  { label: 'Segunda a sexta', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
  { label: 'Sábado', days: ['Saturday'], opens: '09:00', closes: '17:00' },
  { label: 'Domingo', days: ['Sunday'], opens: '00:00', closes: '00:00', closed: true },
];
export const inPersonDescription = 'Atendimento presencial mediante agendamento.';
export const psychologistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Psychologist',
  name: 'Nair Guimarães – Psicóloga',
  url: siteUrl,
  image: ogImageUrl,
  telephone: `+${whatsappNumber}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Brasília – DF' },
  areaServed: 'Brasília – DF',
  sameAs: [instagramUrl],
  openingHoursSpecification: openingHours.map(({ days, opens, closes }) => ({
    '@type': 'OpeningHoursSpecification', dayOfWeek: days.map(day => `https://schema.org/${day}`), opens, closes,
  })),
};
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, Nair! Vim pelo site e gostaria de agendar uma consulta.')}`;
export const specialties = [
  { title: 'Ansiedade', description: 'Estratégias da TCC para lidar com preocupação, tensão e pensamentos acelerados.' },
  { title: 'Depressão', description: 'Um espaço seguro para compreender o que você sente e reconstruir o seu dia a dia.' },
  { title: 'Crianças e adolescentes', description: `Atendimento a partir de ${minimumChildAge} anos, adaptado a cada fase do desenvolvimento.` },
  { title: 'Adultos e idosos', description: 'Apoio para desafios emocionais e mudanças em qualquer fase da vida.' },
];
export const faqs = [
  { question: 'Atende plano de saúde?', answer: 'O atendimento é particular, mas emito recibo para que você possa solicitar o reembolso ao seu plano, de acordo com as regras do seu contrato.' },
  { question: 'Como funciona a terapia online?', answer: 'As sessões acontecem por videochamada, com o mesmo sigilo e cuidado do atendimento presencial. Você só precisa de um local reservado e de uma boa conexão.' },
  { question: 'Atende crianças?', answer: `Sim, atendo crianças a partir de ${minimumChildAge} anos, além de adolescentes, adultos e idosos.` },
  { question: 'Onde é o atendimento presencial?', answer: 'Em Brasília. O local é informado no momento do agendamento.' },
  { question: 'Como agendar uma consulta?', answer: 'É só clicar no botão de WhatsApp e me enviar uma mensagem para combinarmos o melhor horário.' },
];