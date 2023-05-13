import { MainProvider } from '@/context/main';
import Script from 'next/script';
import '@/styles/globals.css'
import '@/styles/typography.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MainProvider>
      <Script src="https://kit.fontawesome.com/3b49b8af22.js" crossOrigin="anonymous" strategy="beforeInteractive"/>
      { getLayout(<Component {...pageProps} />) }
    </MainProvider>
  )
}
