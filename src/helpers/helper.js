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

module.exports = {
    formatMovie
};
  