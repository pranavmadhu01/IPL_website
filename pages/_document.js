
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        </Head>
      <body>
        <Main />
        <NextScript />
 
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/sketch.js/1.0/sketch.min.js"></Script>
      </body>
    </Html>
  )
}