import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/contexts/SessionContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HomePage from './home/index';
import LandingPageImage from '@/components/LandingPageImage';
import LandingPageOptions from '@/components/LandingPageOptions';

import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { REVIEWS_QUERY, GENRE_QUERY } from "@/config/queries";
import { ALL_NEWS_QUERY } from '@/config/queries';


export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const genre = await apolloClient.query({
    query: GENRE_QUERY
  });
  const news = await apolloClient.query({
    query: ALL_NEWS_QUERY
  });

  const res = await Promise.all([genre, news]).then(
    (responses) => {
      return responses
    }
  );

  return addApolloState(apolloClient, {
    props: {
      res
    },
    revalidate: 60,
  });
}

export default function LandingPage({ res }) {
  const sess = useContext(SessionContext);
  const [loaded, setLoaded] = useState(false)
  const router = useRouter();

  useEffect(() => {
    sess === false ? setLoaded(false) : setLoaded(true);
  }, [sess])


  return (
    <>

      {
        loaded === false ?
          <div>
            <Head>
              <title>Scrutiny | Welcome</title>
              <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32" />
            </Head>

            <div className="container-fluid main-content">
              <div className="container-fluid main-content__entry">
                <div className="main-content__image-and-options">
                  <LandingPageImage />
                  <LandingPageOptions />
                </div>
              </div>

            </div>
          </div>
          :
          <HomePage res={res} />



      }


    </>
  )
}

