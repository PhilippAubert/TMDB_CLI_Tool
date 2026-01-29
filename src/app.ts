#!/usr/bin/env node

import dotenv from "dotenv";
import program from "./commander.js";
import axios from "axios";

import { getCategory, getUrl } from "./helpers.js";

import type { Movie } from "./types.js";

dotenv.config();
  
const args = program.args;

if (!args[0]) {
    console.error("invalid category!");
    process.exit(1);
}

const category = getCategory(args[0]);
const urlFromQuery = getUrl(category);

try {
    const {data} = await axios({
        method: "get",
        url: urlFromQuery,
        headers: {
            accept: 'application/json',
            Authorization:`Bearer ${process.env["API_TOKEN"]}`
        }});
        data.results.forEach((movie:Movie) => console.log(
            movie.original_title,`(${movie.original_language})`, "\n",
            movie.vote_average, 
            movie.vote_count)
        );
    } catch (e) {
    console.error(e);
}