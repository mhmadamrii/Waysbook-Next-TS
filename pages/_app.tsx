import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from "../i18n"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </>
  )
}
