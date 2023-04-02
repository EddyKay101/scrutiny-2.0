import { RichTextContent, RichTextData } from "contentful";
export interface ReviewsItem {
    title: string;
    body: RichTextData | RichTextContent;
    image: {
        url: string;
    };
    slug: string;
    trending: boolean;
    isMostScrutinised: boolean;
    relatedCollection: ReviewsItem[];
}

export interface Reviews {
    data: {
        reviewsCollection: {
            items: ReviewsItem[];
        };
    };
}
