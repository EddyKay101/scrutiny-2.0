
import Layout from "@/components/Layout";
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';

const createStyles = (theme: Theme) => {
    const stl = {
        color: theme.color.accents,
        background: theme.color.background,

    }

    return stl;
}

const x = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID

export default function HomePage({ data }) {

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



