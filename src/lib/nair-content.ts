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
  description: 'Psicóloga em Brasília especializada em terapia cognitivo-comportamental (TCC), com atendimento online e presencial.',
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
// Valores do pacote de 5 sessões conforme oferta publicada no Google Meu Negócio (válida até 31/12/2026).
export const packageSessions = 5;
export const packagePrices = { online: '560', presencial: '900' };
export const faqs = [
  { question: 'Atende plano de saúde?', answer: 'O atendimento é particular, mas emito recibo para que você possa solicitar o reembolso ao seu plano, de acordo com as regras do seu contrato.' },
  { question: 'Como funciona a terapia online?', answer: 'As sessões acontecem por videochamada, com o mesmo sigilo e cuidado do atendimento presencial. Você só precisa de um local reservado e de uma boa conexão.' },
  { question: 'Atende crianças?', answer: `Sim, atendo crianças a partir de ${minimumChildAge} anos, além de adolescentes, adultos e idosos.` },
  { question: 'Onde é o atendimento presencial?', answer: 'Em Brasília. O local é informado no momento do agendamento.' },
  { question: 'Como agendar uma consulta?', answer: 'É só clicar no botão de WhatsApp e me enviar uma mensagem para combinarmos o melhor horário.' },
  { question: 'O que a terapia cognitivo-comportamental trata?', answer: 'A TCC é indicada para ansiedade, depressão, estresse, medos, dificuldades nas relações e outras questões emocionais e de comportamento. Ela ajuda a identificar como pensamentos, emoções e atitudes influenciam o dia a dia, e a construir formas mais saudáveis de lidar com eles.' },
  { question: 'Quanto custa a terapia cognitivo-comportamental?', answer: `Pacote de ${packageSessions} sessões: R$ ${packagePrices.online} online ou R$ ${packagePrices.presencial} presencial. Os valores são confirmados no agendamento.` },
];
export const googleRating = { score: '5,0', count: 37 };
export const googleReviewsUrl = 'https://www.google.com/search?kgmid=/g/11n43dnjsz&hl=pt-BR&q=Psic%C3%B3loga+Online+e+Presencial%2FBras%C3%ADlia-+NairGuimaraes-Terapia+Cognitivo+comportamental#lrd=0x935a294c141d6e43:0xa22f32d7ee34a5ff,1,,,,';
// Trechos literais de avaliações públicas no Google; sobrenome abreviado para preservar os pacientes.
export const reviews = [
  { author: 'Rafaela S.', text: 'Faço acompanhamento com ela e só tenho elogios. É uma psicóloga extremamente acolhedora, atenta e sensível, que realmente escuta sem julgamentos. Desde o início, me senti confortável e segura nas sessões, o que fez toda a diferença no meu processo.' },
  { author: 'Lívia C.', text: 'Profissional impecável. Demonstra um olhar muito humano e cuidadoso. Sinto muita segurança no trabalho dela pela atenção e pelo carinho com que conduz o atendimento. Recomendo de olhos fechados!' },
  { author: 'Terezinha M.', text: 'Excelente profissional, muito atencioso e empático. Consegue ouvir sem julgamentos e conduz as sessões de forma acolhedora e respeitosa. Demonstra conhecimento, sensibilidade e compromisso com o bem-estar dos pacientes.' },
  { author: 'Carmena P.', text: 'Profissional excelente, sempre disponível e preocupada com seus pacientes. Me ajudou muito em uma fase muito difícil em minha vida.' },
  { author: 'Cintia G.', text: 'Uma profissional incrível, humana e acolhedora. Sua escuta atenta e sensibilidade fazem toda a diferença no processo terapêutico.' },
  { author: 'Mila A.', text: 'Ótima psicóloga, gosto dela. Está me ajudando a me entender melhor.' },
];
