const stats = require('./statistics');

/**
 * This function formats a movie entry in a list of movies.
 * @param movie The movie to be formatted.
 */
async function formatMovieEntry(movie={}) {
    return {
        movie_url: 'http://localhost:4000/api/movies/movie/' + movie._id,
        title: movie.title || "",
        year: movie.year || "",
        users_rating: movie.users_rating || "",
        votes: movie.votes || "",
        image_url: movie.img_url || "",
    };
}

/**
 * This function formats a the details of a movie.
 * @param movie The movie to be formatted.
 */
async function formatMovieDetails(movie={}) {
    return {
        title: movie.title || "",
        rating: movie.rating || "",
        year: movie.year || "",
        users_rating: movie.users_rating || "",
        votes: movie.votes || "",
        metascore: movie.metascore || "",
        img_url: movie.img_url || "",
        countries: movie.countries || [],
        languages: movie.languages || [],
        actors: movie.actors || [],
        genre: movie.genre || [],
        tagline: movie.tagline || "",
        description: movie.description || "",
        directors: movie.directors || "",
        runtime: movie.runtime || "",
        imdb_url: movie.imdb_url || "",
    };
}


/**
 * Computes and formats the statistics.
 * @param distribution The distribution of the data.
 * @return Formatted stats object.
 */
async function formatStatistics(distribution) {
    return {
        mean : stats.getMean(distribution),
        median : stats.getMedian(distribution),
        mode : stats.getMode(distribution),
        std : stats.getStandardDeviation(distribution),
        visualization : {
            distribution: distribution,
            min: 0.0,
            max: 10.0,
            step: 0.1,
        }
    };
}

module.exports = {
    formatMovieEntry,
    formatMovieDetails,
    formatStatistics,
}