import { MainProvider } from '@/context/main';
import '@/styles/globals.css'
import '@/styles/typography.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MainProvider>
      { getLayout(<Component {...pageProps} />) }
    </MainProvider>
  )
}
