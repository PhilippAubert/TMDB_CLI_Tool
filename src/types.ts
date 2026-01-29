export type Movie = {
    original_language:string,
    original_title:string,
    vote_average:string,
    vote_count:string
}

export type CategoryKey = keyof typeof categoryMap;

export const categoryMap = {
    popular: "popular",
    top: "top_rated",
    playing: "now_playing",
    upcoming: "upcoming",
};