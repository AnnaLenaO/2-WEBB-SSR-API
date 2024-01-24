//first test:
console.log("Hello World");

import express from "express";
//to get access to resources from url:
import { allMovies, oneMovie } from "./src/movies.js";

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
    //const id = 5;
    const movie = await oneMovie(req.params.id);
    //const movie = await oneMovie(id);
    res.render('movie', {
        article: movie
    });
});

app.use("/static", express.static("./static"));

app.listen(5080);
