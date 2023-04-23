import { gql } from "@apollo/client";

export const REVIEWS_QUERY = gql`
    query ReviewsByTag($tag: String) {
        reviewsCollection(where: { genre: { tag: $tag } }) {
            items {
                title
                body
                slug
                image {
                    url
                }
                isMostScrutinised
                trending
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
export const GENRE_STANDARD_QUERY = gql`
    query Genre($tag: String) {
        genreStandardPageCollection(where: { genre: { tag: $tag } }) {
            items {
                genre {
                    tag
                }
                title
                reviewsBlockCollection(limit: 6) {
                    items {
                        ... on Reviews {
                            title
                            body
                            slug
                            image {
                                url
                            }
                            isMostScrutinised
                            trending
                        }
                    }
                }
                newsBlockCollection(limit: 6) {
                    items {
                        ... on NewsPage {
                            title
                            image {
                                url
                            }
                            copy
                        }
                    }
                }
            }
        }
    }
`;

export const GENRE_DETAIL_QUERY = gql`
    query ($genre: String) {
        genreDetail: genreStandardPageCollection(
            where: { genre: { tag: $genre } }
        ) {
            items {
                genre {
                    tag
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
    query ($tag: String) {
        newsPageCollection(where: { tag: { tag: $tag }, trending: true }) {
            items {
                title
                image {
                    url
                }
                copy
            }
        }
    }
`;
