// Gerencia persistência no localStorage conforme PRD seção 5
// Só escreve dados após consentimento de cookies (RN-05 / LGPD)

const SESSION_KEY = 'bella_derma_session'
const PREFS_KEY = 'bella_derma_preferences'
const EXPIRY_DAYS = 90

export interface BellaSession {
  firstVisit: string
  lastVisit: string
  visitCount: number
  ctaClicked: boolean
  servicesViewed: string[]
  scrollDepth: number
}

export interface BellaPreferences {
  cookieConsent: boolean
  consentDate: string | null
}

function isExpired(isoDate: string): boolean {
  const diff = Date.now() - new Date(isoDate).getTime()
  return diff > EXPIRY_DAYS * 24 * 60 * 60 * 1000
}

export function getPreferences(): BellaPreferences {
  try {
    const raw = localStorage.getItem(PREFS_KEY)
    if (!raw) return { cookieConsent: false, consentDate: null }
    return JSON.parse(raw) as BellaPreferences
  } catch {
    return { cookieConsent: false, consentDate: null }
  }
}

export function saveConsent(): void {
  const prefs: BellaPreferences = {
    cookieConsent: true,
    consentDate: new Date().toISOString(),
  }
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
}

export function revokeConsent(): void {
  localStorage.removeItem(PREFS_KEY)
  localStorage.removeItem(SESSION_KEY)
}

export function getSession(): BellaSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const session = JSON.parse(raw) as BellaSession
    // Expira após 90 dias
    if (isExpired(session.firstVisit)) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
    return session
  } catch {
    return null
  }
}

export function initOrUpdateSession(): void {
  if (!getPreferences().cookieConsent) return

  const now = new Date().toISOString()
  const existing = getSession()

  if (!existing) {
    const newSession: BellaSession = {
      firstVisit: now,
      lastVisit: now,
      visitCount: 1,
      ctaClicked: false,
      servicesViewed: [],
      scrollDepth: 0,
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(newSession))
  } else {
    existing.lastVisit = now
    existing.visitCount += 1
    localStorage.setItem(SESSION_KEY, JSON.stringify(existing))
  }
}

export function trackCtaClick(): void {
  const session = getSession()
  if (!session) return
  session.ctaClicked = true
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function trackServiceView(serviceId: string): void {
  const session = getSession()
  if (!session) return
  if (!session.servicesViewed.includes(serviceId)) {
    session.servicesViewed.push(serviceId)
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  }
}

export function trackScrollDepth(depth: number): void {
  const session = getSession()
  if (!session) return
  if (depth > session.scrollDepth) {
    session.scrollDepth = Math.round(depth)
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  }
}
