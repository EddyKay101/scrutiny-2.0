import { gql } from "@apollo/client";

export const REVIEWS_QUERY = gql`
    query {
        reviewsCollection {
            items {
                title
                body
                slug
            }
        }
    }
`;
