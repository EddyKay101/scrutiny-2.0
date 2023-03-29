export interface NewsItem {
    title: string;
    heroText: string;
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
// export interface News {
//     data: {
//         newsPageCollection: {
//             items: [
//                 {
//                     title: string;
//                     heroText: string;
//                     image: {
//                         url: string;
//                     };
//                     slug: string;
//                     trending: boolean;
//                 }
//             ];
//         };
//     };
// }
