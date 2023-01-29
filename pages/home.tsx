import { initializeApollo, addApolloState } from "@/lib/apollo-client";
import Layout from "@/components/Layout";
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { REVIEWS_QUERY } from "@/config/queries";
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
        query: REVIEWS_QUERY
    });

    return addApolloState(apolloClient, {
        props: {
            data
        },
        revalidate: 60,
    });
}
export default function HomePage({ data }) {
    console.log(data);
    const { theme, setTheme, toggleTheme } = useTheme();

    const Styles = useThemeAwareObject(createStyles);

    return (

        <Layout
            title='Scrutiny | Home'
            description='A collation of items from Scrutiny site'
            keywords="scrutiny, scrutinyng, music"
            location='home-page'
        >
            <div className="container">
                <p style={{ color: Styles.color }}>Home Page</p>




            </div>
        </Layout>

    )
}



