import '~/styles/globals.scss'
import type { AppProps } from 'next/app'
import { StatusProvider } from "../context/statusContext"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StatusProvider>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
    <Component {...pageProps} />
    </StatusProvider>
    </>
  )
}

export default MyApp
