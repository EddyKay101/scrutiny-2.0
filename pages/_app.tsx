import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.scss'
import { SessionContext } from '@/contexts/SessionContext'
import { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(false);
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
    <SessionContext.Provider value={value}>
      <Component {...pageProps} />
    </SessionContext.Provider>

  )
}

export default MyApp
