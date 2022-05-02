import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Layout({ title, keywords, description, children }) {

    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <div className="container">
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Scrutiny | Find the hottest parties',
    description: 'Find the latest music critisism',
    keywords: 'music, good music, dj'
}
