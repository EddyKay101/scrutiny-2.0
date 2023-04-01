import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/contexts/SessionContext';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout/Layout';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { ScrCarousel } from "@/components/Carousel/ScrCarousel";

import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { REVIEWS_QUERY, GENRE_QUERY } from "@/config/queries";

import NewsBlock from '@/components/NewsBlock';
import { ALL_NEWS_QUERY } from '@/config/queries';
const createStyles = (theme: Theme) => {
  const stl = {
    color: theme.color.accents,
    background: theme.color.background,

  }

  return stl;
}

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

type homePageProps = {
  res?: any;
}


export default function HomePage({ res }: homePageProps) {
  const sess = useContext(SessionContext);
  const [loaded, setLoaded] = useState(false)
  const { theme, setTheme, toggleTheme } = useTheme();

  const Styles = useThemeAwareObject(createStyles);
  useEffect(() => {
    sess === false ? setLoaded(false) : setLoaded(true);
  }, [sess])
  return (
    <>
      {
        loaded &&
        <Layout
          title='Scrutiny | Home'
          description='A collation of items from Scrutiny site'
          keywords="scrutiny, scrutinyng, music"
          location='home-page'
        >
          <div className="home-page">
            <ScrCarousel data={res[0]?.data} />
            <NewsBlock data={res[1].data} />
          </div>
        </Layout>

      }
    </>


  )
}



