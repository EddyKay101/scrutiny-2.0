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
import { Reviews } from '@/models/Reviews.model';
// hooks
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';


// Pages
import LandingPageImage from '@/components/LandingPageImage';
import LandingPageOptions from '@/components/LandingPageOptions';

// Components
import NewsBlock from '@/components/NewsBlock';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Navigation } from 'swiper';
import ImageText from '@/components/ImageText';

// Queries
import { REVIEWS_QUERY, GENRE_DETAIL_QUERY, ALL_NEWS_QUERY, ALL_NEWS_QUERY_BY_TAG } from "@/config/queries";





const createStyles = (theme: Theme) => {
  const stl = {
    color: theme.color.accents,
    background: theme.color.background,

  }

  const swiperArrow = {
    color: "red"
  }

  return {
    stl,
    swiperArrow
  }
}


export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  const reviews: Reviews = await apolloClient.query({
    query: REVIEWS_QUERY,
    variables: {
      tag: params.tag
    }
  });
  const news = await apolloClient.query({
    query: ALL_NEWS_QUERY_BY_TAG,
    variables: {
      tag: params.tag
    }
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

  return { paths, fallback: "blocking" }
}



export default function Tag({ res }) {
  console.log(res[1])

  const reviews: Reviews = res[0];
  const sess = useContext(SessionContext);
  const [loaded, setLoaded] = useState(false)
  const { theme, setTheme, toggleTheme } = useTheme();

  const Styles = useThemeAwareObject(createStyles);

  const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #e7bb6a !important;
  }
`;
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
                <div className="col-6 genre-standard__first-section--carousel">

                  <StyledSwiper navigation={true} modules={[Navigation]} className="carousel-swiper">
                    {
                      reviews.data.reviewsCollection.items.map((item, index) => (
                        <SwiperSlide key={index}>
                          <ImageText payload={item} />
                        </SwiperSlide>
                      ))
                    }
                  </StyledSwiper>

                </div>
                <div className="col-6 genre-standard__first-section--news">
                  <div className="row genre-standard__first-section--news--container">
                    {
                      res[1].data.newsPageCollection.items.map((item, index) => (
                        <div key={index} className={index === 0 ? "col-md-12 mb-md-2" : "col-md-6 mr-3"}>
                          <ImageText payload={item} />
                        </div>
                      ))
                    }
                  </div>
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



