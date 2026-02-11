export const WHATSAPP_NUMBER = '524412812543';

export const WHATSAPP_MESSAGE_DEFAULT = encodeURIComponent(
  'Hola, me interesa conocer más sobre sus productos y cotizar.'
);

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message ?? WHATSAPP_MESSAGE_DEFAULT}`;
