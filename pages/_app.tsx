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
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const { setTheme } = useTheme();
  const apolloClient = useApollo(pageProps)
  const [value, setValue] = useState(false);
  // const [t, setT] = useState(typeof window !== 'undefined' && localStorage.getItem('theme'));
  const [t, setT] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme') || 'light'
  );


  useEffect(() => {
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setT(storedTheme);
    }
  }, [])

  useEffect(() => {
    let data = localStorage.getItem('state');
    if (data === 'active') {
      setValue(true);
      setTimeout(() => {
        localStorage.clear();
        setValue(false);
        setTheme(t === "light" ? LIGHT_THEME : DARK_THEME);
      }, 24 * 60 * 60 * 1000);
    }

  }, [setTheme, t])

  return (
    <SessionContext.Provider value={value}>
      <ThemeProvider initial={t === 'dark' ? DARK_THEME : LIGHT_THEME}>
        {/* <ThemeProvider initial={t === 'dark' ? DARK_THEME : LIGHT_THEME}> */}
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </SessionContext.Provider>

  )
}

export default MyApp
