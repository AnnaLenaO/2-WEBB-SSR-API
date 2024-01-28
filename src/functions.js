export function errorMovieHandle (err, req, res, next) {
    if (req.headersSent) {
        return next(err);
    }
    res.status(404);
    res.render('error', { error: err });
};
