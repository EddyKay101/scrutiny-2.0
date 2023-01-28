import Layout from "@/components/Layout";
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';
const createStyles = (theme: Theme) => {
    const stl = {
        color: theme.color.accents,
        background: theme.color.background,

    }

    return stl;
}
export default function HomePage() {
    const { theme, setTheme, toggleTheme } = useTheme();


    const handleChange = () => {
        if (typeof window !== 'undefined') {
            const d = localStorage.getItem('theme')
            if (d === "dark") {
                localStorage.setItem('theme', 'light')
                setTheme(LIGHT_THEME)
            } else {
                localStorage.setItem('theme', 'dark')
                setTheme(DARK_THEME)
            }





        }
    }

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
                <input type="checkbox" onChange={handleChange} data-toggle="toggle" />

            </div>
        </Layout>

    )
}