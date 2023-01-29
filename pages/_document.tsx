import { Html, Head, Main, NextScript } from 'next/document'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from '../i18n'

export default function Document() {
  return (
    <I18nextProvider i18n={i18n}>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </I18nextProvider>
  )
}
