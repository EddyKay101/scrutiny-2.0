import { NewsItem } from "./News.model";
import { ReviewsItem } from "./Reviews.model";
export interface Genre {
    data: {
        allGenres: {
            items: [
                {
                    title: string;
                    genre: {
                        tag: string;
                    };
                    image: {
                        url: string;
                    };
                    genreVideo: {
                        url: string;
                    };
                }
            ];
        };
    };
}

export interface GenreStandardPage {
    data: {
        genreStandardPageCollection: {
            items: [
                {
                    genre: {
                        tag: string;
                    };
                    reviewsBlockCollection: {
                        items: ReviewsItem[];
                    };
                    newsBlockCollection: {
                        items: NewsItem[];
                    };
                }
            ];
        };
    };
}
