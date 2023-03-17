export interface News {
    data: {
        newsPageCollection: {
            items: [
                {
                    title: string;
                    heroText: string;
                    image: {
                        url: string;
                    };
                    slug: string;
                    trending: boolean;
                }
            ];
        };
    };
}
