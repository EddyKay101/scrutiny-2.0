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
