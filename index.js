//first test
console.log("Hello World");

import express from "express";
//to get access to resources from url:
import { allMovies, oneMovie } from "./src/movies.js";

const app = express();

//routes for answer requests goes here (app.get etc)

app.use("/static", express.static("./static"));

app.listen(5080);
