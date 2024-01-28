import express from 'express';
import markdownit from 'markdown-it';
import { allMovies, oneMovie } from './movies.js';
import { errorMovieHandle } from './functions.js';
 
const app = express();
const md = markdownit();

//template engine:
app.set('view engine', 'ejs');

//routes for answer requests:
app.get('/', async (req, res, next) => {
    const movies = await allMovies();
    res.render('home', {
        articles: movies
    });
});

app.get('/movies/:id', async (req, res, next) => {
    const movie = await oneMovie(req.params.id)
    .catch(err => next(err));

    next();

    //markdown movie.intro to HTML:
    const introHtml = md.render(movie.intro);
    res.render('movie', {
        article: movie,
        introText: introHtml
    });
});

app.use('/static', express.static('./static'));
app.use (errorMovieHandle);

export default app;
