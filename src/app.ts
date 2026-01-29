#!/usr/bin/env node

import dotenv from "dotenv";
import program from "./commander.js";
import axios from "axios";

dotenv.config();

const categoryMap = {
    popular : "popular",
    top : "top_rated",
    playing: "now_playing",
    upcoming: "upcoming"
};

const args = program.args;


const getCategory = (argValue:string[]) => {
    const key = Object.keys(categoryMap).filter(item => item === argValue[0]);
    return key ? categoryMap[key as unknown as keyof typeof categoryMap] : "No type specified";
}

const getUrl =  (category:string): string => {
    return `https://api.themoviedb.org/3/movie/${category}?langauge=en-US&page=1`;
}

const category = getCategory(args);

const urlFromQuery = getUrl(category);

const {data} = await axios({
    method: "get",
    url: urlFromQuery,
    headers: {
        accept: 'application/json',
        Authorization:`Bearer ${process.env["API_TOKEN"]}`
    }
});

data.results.forEach((item:any) => console.log(item.original_title, item.title, item.release_date, item.original_language, item.vote_count));