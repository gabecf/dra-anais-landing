// Configure o número de WhatsApp da Dra. Ana Laís Rigolon abaixo.
// O formato internacional é: 55 + DDD + número (ex: 5519999999999)
export const WHATSAPP_NUMBER = "5519999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma consulta com a Dra. Ana Laís Rigolon.";

export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const SITE_META = {
  title: "Dra. Ana Laís Rigolon | Obesidade, Emagrecimento e Nutrologia em Piracicaba",
  description:
    "Acompanhamento médico especializado em obesidade, emagrecimento e nutrologia em Piracicaba-SP. Cuidado sério, baseado em ciência, sem promessas milagrosas.",
  author: "Dra. Ana Laís Rigolon",
  url: "https://www.analaisrigolon.com.br",
};
