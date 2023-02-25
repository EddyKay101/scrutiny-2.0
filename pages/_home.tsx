
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout/Layout';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { ScrCarousel } from "@/components/Carousel/ScrCarousel";

import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import { REVIEWS_QUERY, GENRE_QUERY } from "@/config/queries";
const createStyles = (theme: Theme) => {
    const stl = {
        color: theme.color.accents,
        background: theme.color.background,

    }

    return stl;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();
    const data = await apolloClient.query({
        query: GENRE_QUERY
    });

    return addApolloState(apolloClient, {
        props: {
            data
        },
        revalidate: 60,
    });
}

type homePageProps = {
    data?: any;
}


export default function HomePage({ data }: homePageProps) {

    const { theme, setTheme, toggleTheme } = useTheme();

    const Styles = useThemeAwareObject(createStyles);

    return (
        <Layout
            title='Scrutiny | Home'
            description='A collation of items from Scrutiny site'
            keywords="scrutiny, scrutinyng, music"
            location='home-page'
        >
            <div className="home-page">
                <ScrCarousel payload={data?.data.allGenres} />
            </div>
        </Layout>

    )
}



