import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';
import Layout from "@/common/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
                <Component {...pageProps} />
      </Layout>

  )
}
