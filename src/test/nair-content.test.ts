import { describe, expect, it } from 'vitest';
import { faqs, inPersonDescription, instagramUrl, minimumChildAge, openingHours, professionalRegistration, psychologistSchema, whatsappNumber, whatsappUrl } from '../lib/nair-content';

describe('approved practice rules', () => {
  it('attends children from age seven', () => expect(minimumChildAge).toBe(7));
  it('uses the approved WhatsApp number', () => expect(whatsappNumber).toBe('5561995169116'));
  it('uses the approved professional registration', () => expect(professionalRegistration).toBe('CRP 01/25080'));
  it('opens WhatsApp with the approved appointment message', () => {
    const url = new URL(whatsappUrl);
    expect(url.hostname).toBe('wa.me');
    expect(url.pathname).toBe('/5561995169116');
    expect(url.searchParams.get('text')).toBe('Olá, Nair! Vim pelo site e gostaria de agendar uma consulta.');
  });
  it('uses the approved Instagram profile', () => expect(instagramUrl).toBe('https://www.instagram.com/psicologanaircguimaraes'));
  it('opens weekdays from 08:00 to 20:00', () => {
    expect(openingHours[0]).toMatchObject({ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' });
  });
  it('opens Saturday from 09:00 to 17:00', () => expect(openingHours[1]).toMatchObject({ days: ['Saturday'], opens: '09:00', closes: '17:00' }));
  it('is closed on Sunday', () => expect(openingHours[2]).toMatchObject({ days: ['Sunday'], closed: true, opens: '00:00', closes: '00:00' }));
  it('publishes only the approved city, without street address', () => expect(psychologistSchema.address).toEqual({ '@type': 'PostalAddress', addressLocality: 'Brasília – DF' }));
  it('publishes the approved identity and social profile', () => {
    expect(psychologistSchema['@type']).toBe('Psychologist');
    expect(psychologistSchema.name).toBe('Nair Guimarães – Psicóloga');
    expect(psychologistSchema.sameAs).toEqual(['https://www.instagram.com/psicologanaircguimaraes']);
  });
  it('keeps in-person visits by appointment without publishing the location', () => {
    expect(inPersonDescription).toBe('Atendimento presencial mediante agendamento.');
    expect(faqs.find(item => item.question === 'Onde é o atendimento presencial?')?.answer).toBe('Em Brasília. O local é informado no momento do agendamento.');
  });
});
import { googleRating, googleReviewsUrl, reviews } from '../lib/nair-content';

describe('google reviews', () => {
  it('links to the Google reviews of the approved profile', () => {
    const url = new URL(googleReviewsUrl);
    expect(url.hostname).toBe('www.google.com');
    expect(url.searchParams.get('kgmid')).toBe('/g/11n43dnjsz');
    expect(url.hash).toContain('lrd=0x935a294c141d6e43:0xa22f32d7ee34a5ff,1');
  });
  it('shows the Google rating', () => expect(googleRating).toEqual({ score: '5,0', count: 37 }));
  it('abbreviates every reviewer surname', () => {
    expect(reviews.length).toBeGreaterThan(0);
    for (const { author } of reviews) expect(author).toMatch(/^\S+ \S\.$/);
  });
});
