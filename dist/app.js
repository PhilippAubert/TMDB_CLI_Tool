#!/usr/bin/env node
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
//const accoundId = process.env["ACCOUNT_ID"] || 22709045;
//const baseUrl = `https://api.themoviedb.org/3/account/${accoundId}/movie/popular?language=en-US&page=1';`;
//const baseUrl2 = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const baseUrl3 = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
// const baseUrl4 = "https://api.themoviedb.org/3/movie/top_rated";
// const baseUrl5 = "https://api.themoviedb.org/3/movie/upcoming";
console.log(process.argv);
const { data } = await axios({
    method: "get",
    url: baseUrl3,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env["API_TOKEN"]}`
    }
});
data.results.forEach((item) => console.log(item.original_title));
