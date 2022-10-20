import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import Header from '../src/components/Header'
import Theme from '../src/themes/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>My Teacher</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
