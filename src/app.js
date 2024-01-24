//first test:
console.log("Hello World");

import express from "express";
import { allMovies, oneMovie } from "./movies.js";

const app = express();

//template engine:
app.set('view engine', 'ejs');

//routes for answer requests:
app.get('/', async (req, res) => {
    const movies = await allMovies();
    res.render('home', {
        articles: movies
    });
});

app.get('/movies/:id', async (req, res) => {
    const movie = await oneMovie(req.params.id);
    res.render('movie', {
        article: movie
    });
});

app.use("/static", express.static("./static"));

export default app;
