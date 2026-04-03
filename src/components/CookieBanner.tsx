// Banner LGPD — PRD RN-05: LocalStorage só escrito após consentimento
import { saveConsent } from '../lib/storage'

interface Props {
  onAccept: () => void
  onDecline: () => void
}

export default function CookieBanner({ onAccept, onDecline }: Props) {
  const handleAccept = () => {
    saveConsent()
    onAccept()
  }

  return (
    <div
      role="dialog"
      aria-label="Banner de consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest border-t border-outline-variant shadow-lg px-6 py-4 md:px-12 md:py-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
    >
      <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">
        Utilizamos cookies para melhorar sua experiência no site.{' '}
        <a href="#" className="text-primary underline hover:no-underline">
          Política de Privacidade
        </a>
        .
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={onDecline}
          className="px-5 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label text-sm hover:bg-surface-container-low transition-colors"
        >
          Recusar
        </button>
        <button
          onClick={handleAccept}
          className="px-6 py-2 rounded-full bg-primary text-on-primary font-label text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
