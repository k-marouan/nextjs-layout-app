import '@/styles/globals.css'

import MainLayout from "@/components/MainLayout"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
   <>
      <Head>
        <title>My page title</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
   </>
  )
}
