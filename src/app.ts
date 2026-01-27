import express from "express";
import dotenv from "dotenv";
import axios, { AxiosError } from "axios";

dotenv.config();

const port = process.env["PORT"] || 4000;
const accoundId = process.env["ACCOUNT_ID"] || 22709045;

const baseUrl = `https://api.themoviedb.org/3/account/${accoundId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;

const app = express();

app.get("/", async (_req, res) => {
    try {
        const {data} = await axios({
            method: "get",
            url: baseUrl,
            headers: {
                accept: 'application/json',
                Authorization:`Bearer ${process.env["API_TOKEN"]}`
            }
        });
        return res.status(201).json({data});
    } catch(e) {
            if (e instanceof AxiosError) {
                if (e.status === 401) {
                    return res.status(401).json({e: "you're unauthorized!"});
                }
            }
        return res.status(500).json({"error": e});
    }
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));