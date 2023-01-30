import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import { useTheme } from '@/contexts/ThemeContext';
export default function Layout({ title, keywords, description, children, location }) {

    const { theme, setTheme, toggleTheme } = useTheme();
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel="icon" href={theme.id === "light" ? "/favicon.svg" : "/favicon-dark.svg"} type="image/svg" sizes="32x32" />
            </Head>
            <Header />
            <div className={`container-fluid ${location} layout-content`}>
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Scrutiny | Scrutiny NG',
    description: 'Find the latest music critisism',
    keywords: 'music, good music, dj'
}
