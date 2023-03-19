
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




export default function Tag() {

  const { theme, setTheme, toggleTheme } = useTheme();

  const Styles = useThemeAwareObject(createStyles);

  return (
    <Layout
      title='Tag'
      description=''
      keywords=""
      location=''
    >
      <div>
        Tags
      </div>
    </Layout>

  )
}



