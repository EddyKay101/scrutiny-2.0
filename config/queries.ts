import { gql } from "@apollo/client";

export const REVIEWS_QUERY = gql`
    query {
        reviewsCollection {
            items {
                title
                body
                slug
                image {
                    url
                }
            }
        }
    }
`;
export const GENRE_QUERY = gql`
    query {
        allGenres: genreStandardPageCollection {
            items {
                genre {
                    tag
                }
                title
                image {
                    url
                }
                genreVideo {
                    url
                }
            }
        }
    }
`;
export const GENRE_DETAIL_QUERY = gql`
    query {
        genreDetail: genreStandardPageCollection(
            where: { genre: { tag: "afrobeats" } }
        ) {
            items {
                genre {
                    tag
                }
                title
                genreImage {
                    url
                }
            }
        }
    }
`;
export const ALL_NEWS_QUERY = gql`
    query {
        newsPageCollection {
            items {
                title
                heroText
                copy
                image {
                    url
                }
                slug
                trending
            }
        }
    }
`;
export const ALL_NEWS_QUERY_BY_TAG = gql`
    query NewsByTag($tag: String) {
        newsPageCollection(where: { tag: { tag: $tag } }) {
            items {
                title
            }
        }
    }
`;
