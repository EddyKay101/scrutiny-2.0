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
