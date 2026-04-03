// RN-01: Todo CTA de agendamento abre WhatsApp com mensagem pré-preenchida
const WHATSAPP_NUMBER = '5511999998888' // substituir pelo número real

export function getWhatsAppUrl(serviceName?: string): string {
  const message = serviceName
    ? `Olá! Tenho interesse no serviço de ${serviceName}.`
    : 'Olá! Gostaria de agendar uma consulta na Bella Derma.'

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
