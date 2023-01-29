import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.scss'
import { SessionContext } from '@/contexts/SessionContext'
import { useState, useEffect, memo } from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo-client'
import { Theme } from '@/models/Theme.model';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useTheme } from '@/contexts/ThemeContext';


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  const [value, setValue] = useState(false);
  const [t, setT] = useState(typeof window !== 'undefined' && localStorage.getItem('theme'));
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setT(() => localStorage.getItem('theme'))

    }

  }, [])

  useEffect(() => {
    let data = localStorage.getItem('state');
    if (data === 'active') {
      setValue(true);
      setTimeout(() => {
        localStorage.clear();
      }, 1000 * 60 * 60);
    }

  }, [])

  return (

    // 
    <>
      <ThemeProvider initial={t === 'dark' ? DARK_THEME : LIGHT_THEME}>

        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>

    // </SessionContext.Provider>


  )
}

export default MyApp
