//first test:
console.log("Hello World");

import express from "express";
import markdownit from 'markdown-it';
import { allMovies, oneMovie } from "./movies.js";

const app = express();
const md = markdownit();

//template engine:
app.set('view engine', 'ejs');

//functions:
function errorMovieHandle(err, req, res, next) {
    res.status(404);
    res.render('error', { error: err });
    next(err);
};

//function errorMovieHandle(res, err) {
    //if (res.headersSent) {
        //console.error(err.status);
        //console.log('Headers sent');
        //console.log(res.statusCode);
    //} else {
        //const statusLog = res.status(500);
        //console.log(statusLog);
        //console.log('No headers sent');
        //console.log(res.statusCode);
        //console.log(err);
        //res.status(404);
        // res.render('error');
    //};
//};

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

    //markdown movie.intro to HTML:
    const introHtml = md.render(movie.intro);
    res.render('movie', {
        article: movie,
        introText: introHtml
    });


    /*.catch(err => {
        if(err) {
            res.status(404);
            res.render('error');
            next(err);
        } else {
            //markdown movie.intro to HTML:
            const introHtml = md.render(movie.intro);
            res.render('movie', {
                article: movie,
                introText: introHtml
            });
        };
    });*/
});

    //.catch(err => errorMovieHandle(res, err));
    //markdown movie.intro to HTML:
    //const introHtml = md.render(movie.intro);

    /*if (movie) {
               
        //Test res:
        console.log(res.status);
        console.log(res.statusCode);
        //console.log(res.headersSent);

        res.render('movie', {
            article: movie,
            introText: introHtml
        });

    } else {
        res.status(404);
        res.send('Error');
        res.redirect('/error');
        //res.status(404).render('error');
    };*/

/*app.get('error', async (req, res) => {
    res.status(404);
    res.render('error');
});*/

app.use("/static", express.static("./static"));

//error-handling middleware:
app.use(errorMovieHandle);

//app.use(funktionName for an error-handling middleware);
/*app.use((err, req, res, next) => {
    res.status(404);
    res.render('error');
});*/

export default app;
