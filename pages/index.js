import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Spinner from '@/components/Spinner';
import LandingPageImage from '@/components/LandingPageImage';
export default function LandingPage() {
  const router = useRouter();
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true)
  }, [isLoaded])
  return (
    <div>
      <Head>
        <title>Scrutiny | Welcome</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32" />
      </Head>

      <div className="container-fluid">
        <div className="container">
          <div className="container__image-container">
            {isLoaded && <LandingPageImage />}

          </div>
        </div>

      </div>

    </div>
  )
}

// LandingPage.getInitialProps = async () => {

// }
