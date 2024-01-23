//first test:
console.log("Hello World");

import express from "express";
//to get access to resources from url:
import { allMovies, oneMovie } from "./src/movies.js";

const app = express();

//template engine:
app.set('view engine', 'ejs');

//routes for answer requests goes here (app.get etc):
app.get('/', (req, res) => {
    res.render('home');
});

app.use("/static", express.static("./static"));

app.listen(5080);
