import { describe, expect, it } from 'vitest';
import { minimumChildAge, professionalRegistration, whatsappNumber, whatsappUrl } from '../lib/nair-content';

describe('approved practice rules', () => {
  it('attends children from age seven', () => expect(minimumChildAge).toBe(7));
  it('keeps the requested WhatsApp placeholder', () => expect(whatsappNumber).toBe('55XXXXXXXXXXX'));
  it('keeps the requested professional registration placeholder', () => expect(professionalRegistration).toBe('CRP 01/XXXXX'));
  it('opens WhatsApp with the approved appointment message', () => {
    const url = new URL(whatsappUrl);
    expect(url.hostname).toBe('wa.me');
    expect(url.searchParams.get('text')).toBe('Olá, Nair! Vim pelo site e gostaria de agendar uma consulta.');
  });
});