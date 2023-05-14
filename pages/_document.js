import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://kit.fontawesome.com/3b49b8af22.js" crossOrigin="anonymous" strategy="beforeInteractive"/>
      </body>
    </Html>
  )
}
