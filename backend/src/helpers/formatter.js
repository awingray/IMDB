// Stats used to compute stats as they are formatted
const stats = require('./statistics');

/**
 * This function formats a movie entry in a list of movies.
 * @param movie The movie to be formatted.
 * @return Formatted movie entry object.
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
 * @return Formatted movie details object.
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

/**
 * This function formats an actor entry in a list of actors.
 * @param actor The actor to be formatted.
 * @return Formatted actor entry object.
 */
async function formatActorEntry(actor) {
    return {
        actor_url: 'http://localhost:4000/api/actors/actor/' + actor._id,
        name: actor.name || "",
        gender: actor.gender || "",
        date_of_birth: actor.dob || ""
    };
}

/**
 * This function formats a the details of an actor.
 * @param actor The actor to be formatted.
 * @return Formatted actor details object.
 */
async function formatActorDetails(actor) {
    return {
        name: actor.name || "",
        gender: actor.gender || "",
        date_of_birth: actor.dob || "",
        bio: actor.bio || "",
        acted_in: actor.actedIn || []
    };
}

/**
 * This function formats a director entry in a list of directors.
 * @param director The director to be formatted.
 * @return Formatted director entry object.
 */
async function formatDirectorEntry(director) {
    return {
        director_url: 'http://localhost:4000/api/directors/director/' + director._id,
        name: director.name || "",
        gender: director.gender || "",
        date_of_birth: director.dob || ""
    };
}

/**
 * This function formats a the details of a director.
 * @param director The director to be formatted.
 * @return Formatted director details object.
 */
async function formatDirectorDetails(director) {
    return {
        name: director.name || "",
        gender: director.gender || "",
        date_of_birth: director.dob || "",
        bio: director.bio || "",
        produced: director.producedBy || []
    };
}

module.exports = {
    formatMovieEntry,
    formatMovieDetails,
    formatStatistics,
    formatActorEntry,
    formatActorDetails,
    formatDirectorEntry,
    formatDirectorDetails
}