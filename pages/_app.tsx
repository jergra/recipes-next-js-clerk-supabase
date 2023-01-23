import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ClerkProvider} from '@clerk/nextjs'
import { Header } from '../components/layout/header/header'
import { Layout } from '../components/layout/layout/layout'

export default function App({ Component, pageProps }: AppProps) {

  return (
      <ClerkProvider {...pageProps}>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
  )
}
