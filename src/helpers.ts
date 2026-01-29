import { categoryMap, type CategoryKey } from "./types.js";

export const getCategory = (arg: string): string => {
    if (!(arg in categoryMap)) {
        console.error(
            `Invalid category "${arg}".\n` +
            `Valid categories: ${Object.keys(categoryMap).join(", ")}`
        );
        process.exit(1);
    }
    return categoryMap[arg as CategoryKey];
};

export const getUrl = (category: string): string => {
    return `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
};