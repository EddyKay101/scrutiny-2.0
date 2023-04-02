// Essentials
import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { SessionContext } from '@/contexts/SessionContext';
import { gql } from "@apollo/client";
// models
import { Theme } from '@/models/Theme.model';
import { Reviews, ReviewsItem } from '@/models/Reviews.model';
// hooks
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';


// Pages
import LandingPageImage from '@/components/LandingPageImage';
import LandingPageOptions from '@/components/LandingPageOptions';

// Components
import NewsBlock from '@/components/NewsBlock';
import { Swiper, SwiperSlide } from "swiper/react";
import ImageText from '@/components/ImageText';

// Queries
import { REVIEWS_QUERY, GENRE_DETAIL_QUERY, ALL_NEWS_QUERY } from "@/config/queries";


import "swiper/css";
import "swiper/css/navigation";
const createStyles = (theme: Theme) => {
  const stl = {
    color: theme.color.accents,
    background: theme.color.background,

  }

  return stl;
}

export async function getStaticProps({ params }) {
  console.log(params)
  const apolloClient = initializeApollo();
  const reviews = await apolloClient.query({
    query: REVIEWS_QUERY,
    variables: {
      tag: params.tag
    }
  });
  const news = await apolloClient.query({
    query: ALL_NEWS_QUERY
  });

  const res = await Promise.all([reviews, news]).then(
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

export async function getStaticPaths() {

  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: GENRE_DETAIL_QUERY,

  });
  const paths = data.genreDetail.items.map(({ genre }) => ({
    params: { tag: genre.tag },

  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" }
}



export default function Tag({ res }) {
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
        loaded === true ?

          <Layout
            title='Tag'
            description=''
            keywords=""
            location=''
          >
            <div className="container genre-standard">
              <div className="row genre-standard__first-section">
                <div className="col-7 genre-standard__first-section--carousel">
                  Tags
                  <Swiper className="carousel-swiper">

                  </Swiper>
                  {/* <ImageText /> */}
                </div>
                <div className="col-5">

                </div>
              </div>



            </div>
          </Layout> :
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
      }

    </>


  )
}



