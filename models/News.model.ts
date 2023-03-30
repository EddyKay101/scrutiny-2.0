import { RichTextContent, RichTextData } from "contentful";
export interface NewsItem {
    title: string;
    heroText: string;
    copy: RichTextData | RichTextContent;
    image: {
        url: string;
    };
    slug: string;
    trending: boolean;
}

export interface News {
    data: {
        newsPageCollection: {
            items: NewsItem[];
        };
    };
}
