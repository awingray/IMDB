// Stats used to compute stats as they are formatted
const stats = require('./statistics');

/**
 * Helpers function turns movie filters into uri query params.
 * @param filter The filter object.
 * @return String of query params.
 */
function movieFilterToQuery({title, actor, director, genre, year}) {
    let uri = '?';
    if (title) uri += 'title=' + encodeURIComponent(title) + '&';
    if (actor) uri += 'actor=' + encodeURIComponent(actor) + '&';
    if (director) uri += 'director=' + encodeURIComponent(director) + '&';
    if (genre) uri += 'genre=' + encodeURIComponent(genre) + '&';
    if (year) uri += 'year=' + encodeURIComponent(year) + '&';
    return uri.slice(0, -1);
}

/**
 * Helper function formats a movie entry in a list of movies.
 * @param movie The movie to be formatted.
 * @return Formatted movie entry object.
 */
async function formatMovieEntry(movie = {}) {
    return {
        movie_uri: 'http://localhost:4000/api/movies/' + movie._id,
        title: movie.title || '',
        year: movie.year || '',
        users_rating: movie.users_rating || '',
        votes: movie.votes || '',
        image_url: movie.img_url || '',
    };
}

/**
 * This function formats a list of movies.
 * @param movies The movies that should be formatted.
 * @param filters The filters used to retrieve these movies.
 * @return Formatted movies object.
 */
async function formatMovies(movies = [], filters = {}) {
    return {
        _self_uri: 'http://localhost:4000/api/movies' + movieFilterToQuery(filters),
        statistics_uri: 'http://localhost:4000/api/movies/statistics' + movieFilterToQuery(filters),
        movies: await Promise.all(movies.map(formatMovieEntry)),
    };
}

/**
 * This function formats a the details of a movie.
 * @param movie The movie to be formatted.
 * @return Formatted movie details object.
 */
async function formatMovieDetails(movie = {}) {
    return {
        _self_uri: 'http://localhost:4000/api/movies/' + movie.id,
        collection_uri: 'http://localhost:4000/api/movies/',
        title: movie.title || '',
        rating: movie.rating || '',
        year: movie.year || '',
        users_rating: movie.users_rating || '',
        votes: movie.votes || '',
        metascore: movie.metascore || '',
        img_url: movie.img_url || '',
        countries: movie.countries || [],
        languages: movie.languages || [],
        actors: movie.actors || [],
        genre: movie.genre || [],
        tagline: movie.tagline || '',
        description: movie.description || '',
        directors: movie.directors || '',
        runtime: movie.runtime || '',
        imdb_url: movie.imdb_url || '',
    };
}

/**
 * Computes and formats the statistics.
 * @param distribution The distribution of the data.
 * @param filters The filters used to retrieve these stats.
 * @return Formatted stats object.
 */
async function formatStatistics(distribution, filters = {}) {
    return {
        _self_uri: 'http://localhost:4000/api/movies/statistics' + movieFilterToQuery(filters),
        movies_uri: 'http://localhost:4000/api/movies' + movieFilterToQuery(filters),
        mean: stats.getMean(distribution),
        median: stats.getMedian(distribution),
        mode: stats.getMode(distribution),
        std: stats.getStandardDeviation(distribution),
        visualization: {
            distribution: distribution,
            min: 0.0,
            max: 10.0,
            step: 0.1,
        }
    };
}

/**
 * Helpers function turns person filters into uri query params.
 * @param filter The filter object.
 * @return String of query params.
 */
function personFilterToQuery({name}) {
    return (name) ? '?name=' + encodeURIComponent(name) : '';
}

/**
 * Helper function formats an actor entry in a list of actors.
 * @param actor The actor to be formatted.
 * @return Formatted actor entry object.
 */
async function formatActorEntry(actor) {
    return {
        actor_uri: 'http://localhost:4000/api/actors/' + actor.id,
        name: actor.name || '',
    };
}

/**
 * This function formats a list of actors.
 * @param actors The actors that should be formatted.
 * @param filters The filters used to retrieve these actors.
 * @return Formatted actors object.
 */
async function formatActors(actors, filters) {
    return {
        _self_uri : 'http://localhost:4000/api/actors' + personFilterToQuery(filters),
        actors: await Promise.all(actors.map(formatActorEntry))
    }
}

/**
 * This function formats a the details of an actor.
 * @param actor The actor to be formatted.
 * @return Formatted actor details object.
 */
async function formatActorDetails(actor) {
    return {
        _self_uri: 'http://localhost:4000/api/actors/' + actor._id,
        collection_uri: 'http://localhost:4000/api/actors/',
        genres_uri: 'http://localhost:4000/api/actors/' + actor._id + '/genres',
        name: actor.name || '',
        gender: actor.gender || '',
        date_of_birth: actor.dob || '',
        bio: actor.bio || '',
        acted_in: actor.actedIn || []
    };
}

/**
 * Helper function formats a director entry in a list of directors.
 * @param director The director to be formatted.
 * @return Formatted director entry object.
 */
async function formatDirectorEntry(director) {
    return {
        director_uri: 'http://localhost:4000/api/directors/' + director.id,
        name: director.name || '',
        gender: director.gender || '',
        date_of_birth: director.dob || ''
    };
}

/**
 * This function formats a list of directors.
 * @param directors The directors that should be formatted.
 * @param filters The filters used to retrieve these directors.
 * @return Formatted directors object.
 */
async function formatDirectors(directors, filters) {
    return {
        _self_uri : 'http://localhost:4000/api/directors' + personFilterToQuery(filters),
        directors: await Promise.all(directors.map(formatDirectorEntry))
    }
}

/**
 * This function formats a the details of a director.
 * @param director The director to be formatted.
 * @return Formatted director details object.
 */
async function formatDirectorDetails(director) {
    return {
        _self_uri: 'http://localhost:4000/api/directors/' + director._id,
        collection_uri: 'http://localhost:4000/api/directors/',
        genres_uri: 'http://localhost:4000/api/directors/' + director._id + '/genres',
        name: director.name || '',
        gender: director.gender || '',
        date_of_birth: director.dob || '',
        bio: director.bio || '',
        produced: director.producedBy || []
    };
}

module.exports = {
    formatMovies,
    formatMovieDetails,
    formatStatistics,
    formatActors,
    formatActorDetails,
    formatDirectors,
    formatDirectorDetails
}