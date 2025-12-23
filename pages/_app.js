import './style.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <Component {...pageProps} />
        <SpeedInsights/>
        </GlobalProvider>
    </NextIntlProvider>
  )
}
