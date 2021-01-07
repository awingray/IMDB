async function formatMovie(info = "") {
    var data = {};

    data = {
        id: info._id || "",
        title: info.title || "",
        rating: info.rating || "",
        year: info.year || "",
        users_rating: info.users_rating || "",
        votes: info.votes || "",
        metascore: info.metascore || "",
        img_url: info.img_url || "",
        countries: info.countries || [],
        languages: info.languages || [],
        actors: info.actors || [],
        genre: info.genre || [],
        tagline: info.tagline || "",
        description: info.description || "",
        directors: info.directors || "",
        runtime: info.runtime || "",
        imdb_url: info.imdb_url || "",
    }

    return data;
}

/**
 * helper function gets mean of distribution.
 * @param distribution The distribution as array of integers.
 * @return {NaN|number} The mean.
 */
function getMean(distribution) {
    let count = distribution.reduce((a, b) => a + b, 0);
    let sum = distribution.reduce((a, b, i) => a + 0.1 * i * b, 0);
    return (count === 0) ? NaN: sum / count;
}

/**
 * helper function gets median of distribution.
 * @param distribution The distribution as array of integers.
 * @return {NaN|number} The median.
 */
function getMedian(distribution){
    let population = distribution.reduce((a, b) => a + b, 0);
    if (population === 0) return NaN;
    let i, j, count = 0;
    for (i = 0; count < population/2; i++) count += distribution[i];
    for (j = i; count === population/2; j++) count += distribution[j];
    return (i+j-2)/20;
}

/**
 * helper function gets mode of distribution.
 * @param distribution The distribution as array of integers.
 * @return {*|NaN} The mode.
 */
function getMode(distribution){
    let max = Math.max(...distribution);
    return (distribution.filter(x => x === max).length === 1) ? distribution.indexOf(max)/10 : NaN;
}

/**
 * helper function gets standard deviation of the distribution.
 * @param distribution The distribution as array of integers.
 * @return {number|NaN} The std.
 */
function getStandardDeviation(distribution){
    let count = distribution.reduce((a, b) => a + b, 0);
    let mean = getMean(distribution);
    if (count < 2) return NaN;
    return Math.sqrt(distribution.reduce((a, b, i) => a + b * (i/10 - mean) * (i/10 - mean), 0) / (count - 1));
}

/**
 * Computes and formats the statistics.
 * @param distribution The distribution of the data.
 * @return Formatted stats object.
 */
async function formatStatistics(distribution) {
    return {
        mean : getMean(distribution),
        median : getMedian(distribution),
        mode : getMode(distribution),
        std : getStandardDeviation(distribution),
        visualization : {
            distribution: distribution,
            min: 0.0,
            max: 10.0,
            step: 0.1,
        }
    };
}

module.exports = {
    formatMovie,
    formatStatistics
};
  