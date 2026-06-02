import { portfolio } from '../content/portfolio'
import { portfolioEn } from '../content/portfolio.en'
import { useLanguage } from '../i18n/LanguageContext'

export function usePortfolio() {
  const { lang } = useLanguage()
  return lang === 'en' ? portfolioEn : portfolio
}
