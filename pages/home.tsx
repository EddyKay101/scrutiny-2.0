
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout/Layout';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { Carousel } from "@/components/Carousel/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { SwiperSlide } from 'swiper/react';
import { initializeApollo, addApolloState } from "@/lib/apollo-client";
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
            <div className="home-page container-fluid">
                <Carousel>
                    {
                        data.data.reviewsCollection.items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div>ddd</div>
                            </SwiperSlide>
                        ))
                    }

                </Carousel>



                <CarouselItem classname={"home-page-carousel-item"}>
                    <div>

                    </div>
                </CarouselItem>
            </div>
        </Layout>

    )
}



