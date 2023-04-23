// Essentials
import Layout from '@/components/Layout/Layout';
import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { SessionContext } from '@/contexts/SessionContext';
import { gql } from "@apollo/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faSearchengin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHeadphonesSimple, faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons';


// Models
import { Theme } from '@/models/Theme.model';
import { Reviews } from '@/models/Reviews.model';
import { GenreStandardPage } from '@/models/Genre.model';

// Hooks
import { useContext, useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { useMemo } from 'react';


// Components
import NewsBlock from '@/components/NewsBlock';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';

import ImageText from '@/components/ImageText';
import ItemCarousel from '@/components/Carousel/ItemCarousel';

// Queries
import { REVIEWS_QUERY, GENRE_DETAIL_QUERY, GENRE_STANDARD_QUERY, ALL_NEWS_QUERY_BY_TAG } from "@/config/queries";






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
  const genreStandardPage = await apolloClient.query({
    query: GENRE_STANDARD_QUERY,
    variables: {
      tag: params.genre
    }
  })
  const reviews: Reviews = await apolloClient.query({
    query: REVIEWS_QUERY,
    variables: {
      tag: params.genre
    }
  });
  const news = await apolloClient.query({
    query: ALL_NEWS_QUERY_BY_TAG,
    variables: {
      tag: params.genre
    }
  });

  const res = await Promise.all([reviews, news, genreStandardPage]).then(
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
    params: { genre: genre.tag },

  }))

  return { paths, fallback: "blocking" }
}



export default function Genre({ res }) {

  const page: GenreStandardPage = res[2];

  const reviews: Reviews = res[0];
  const sess = useContext(SessionContext);
  const [loaded, setLoaded] = useState(false)
  const { theme, setTheme, toggleTheme } = useTheme();

  const Styles = useThemeAwareObject(createStyles);



  useEffect(() => {
    sess === false ? setLoaded(false) : setLoaded(true);
  }, [sess])

  return (

    <Layout
      title={page.data.genreStandardPageCollection.items[0].genre.tag.charAt(0).toUpperCase() + page.data.genreStandardPageCollection.items[0].genre.tag.slice(1)}
      description=''
      keywords=""
      location=''
    >
      <div className="container genre-standard">
        <div className="row mt-5 mb-5 genre-standard__mini-menu">
          <div className="col-12">
            <div className="row">
              <div className="genre-standard__mini-menu--menu-holder col-md-6 col-9">
                <ul className="mini-menu-items">
                  <li>Entertainment</li>
                  <li>Lifestyle</li>
                  <li>Tv</li>
                  <li>Music</li>
                  <li>Events</li>
                  <li>News</li>
                </ul>
              </div>
              <div className="col-md-6 col-3 d-flex justify-content-end">
                <div>
                  <FontAwesomeIcon icon={faSearchengin} fixedWidth size="2x" className="icn" />
                </div>
              </div>
            </div>

            <div className="genre-standard__mini-menu--line col-12"></div>
          </div>

        </div>
        <div className="row genre-standard__first-section">
          <div className="col-md-6 col-12 genre-standard__first-section--carousel">
            <ItemCarousel payload={page.data.genreStandardPageCollection.items[0].reviewsBlockCollection.items} showImageText />
          </div>
          <div className="col-md-6 col-12 genre-standard__first-section--news">
            <div className="row genre-standard__first-section--news--container">
              {

                page.data.genreStandardPageCollection.items[0].newsBlockCollection.items.map((item, index) => (
                  <div key={index} className={index === 0 ? " mb-md-2 col-12" : "col-md-6 display-6 col-12"}>
                    <ImageText payload={item} showCopy={index === 0 ? true : false} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>



      </div>
    </Layout>





  )
}



