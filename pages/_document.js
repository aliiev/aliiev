import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" prefix="og: http://ogp.me/ns#" className='scroll-smooth scroll-pt-24' style={{scrollBehavior:'smooth'}}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
