export type Genre =
    'Action' |
    'Adventure' |
    'Animation' |
    'Biography' |
    'Comedy' |
    'Crime' |
    'Documentary' |
    'Drama' |
    'Family' |
    'Fantasy' |
    'Film Noir' |
    'History' |
    'Horror' |
    'Music' |
    'Mystery' |
    'Romance' |
    'Sci-Fi' |
    'Sport' |
    'Thriller' |
    'War';
export type MovieType = 'TV Show' | 'Movie';

export interface Source {
    episode: number;
    url: string;
}

export interface Movie {
    id: string,
    title: string,
    genres: Genre[],
    type: MovieType,
    posterUrl: string,
    backgroundUrl: string,
    sources: Source[],
}
