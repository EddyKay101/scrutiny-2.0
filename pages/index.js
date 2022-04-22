import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Spinner from '@/components/Spinner';
import LandingPageImage from '@/components/LandingPageImage';
import LandingPageOptions from '@/components/LandingPageOptions';
export default function LandingPage() {
  const [display, setDisplay] = useState('none');
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Scrutiny | Welcome</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32" />
      </Head>

      <div className="container-fluid main-content">
        <div className="container-fluid main-content__entry">
          <div className="main-content__image-and-options">
            <LandingPageImage setDisplay={setDisplay} />
            {/* {
              display === 'none' && <LandingPageOptions />
            } */}
            <LandingPageOptions display={display} />
          </div>
        </div>

      </div>

    </div>
  )
}

// LandingPage.getInitialProps = async () => {

// }
