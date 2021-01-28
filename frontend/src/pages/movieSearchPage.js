import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import ShyLink from "../components/shyLink";

function MovieSearchPage() {
  const aMovies = {
    "total_rows": 62059, "offset": 1929, "rows": [
      { "id": "3aabb9ae22a9f0b0dbb6297c5931a44d", "key": "Aaah! Zombies!!", "value": null },
      { "id": "4901986cc9baf4eb540a1322197df25b", "key": "Aaj Kal", "value": null },
      { "id": "3aabb9ae22a9f0b0dbb6297c598fd5ab", "key": "Aakhari Decision", "value": null },
      { "id": "a858c15f6c04ed4cc6cbb9ae2b64fe3f", "key": "Aaliyah", "value": null },
      { "id": "5d9f4d0fb05807a3d6f00d30631df612", "key": "Aardvark", "value": null },
      { "id": "a858c15f6c04ed4cc6cbb9ae2be8ba5a", "key": "Aardvark", "value": null },
      { "id": "3aabb9ae22a9f0b0dbb6297c59d45094", "key": "Aaron Bacon", "value": null },
      { "id": "b6686e981f0165765c463d7e5f26270b", "key": "Aaron Loves Angela", "value": null },
      { "id": "3aabb9ae22a9f0b0dbb6297c5978a4af", "key": "Aaron Slick from Punkin Crick", "value": null },
      { "id": "b6686e981f0165765c463d7e5f5979f0", "key": "Aaron... Albeit a Sex Hero", "value": null },
      { "id": "48f66bd70de99a120a0b95146474d484", "key": "Aaron's Blood", "value": null },
      { "id": "7545b2a1e610ec7baffad0500536a1ef", "key": "Aaron's House", "value": null }
    ]
  }

  const Genres = [
    { "name": "Comedy", "label": "Comedy" },
    { "name": "Romance", "label": "Romance" },
    { "name": "Horror", "label": "Horror" },
    { "name": "Thriller", "label": "Thriller" },
    { "name": "Crime", "label": "Crime" },
    { "name": "Fantasy", "label": "Fantasy" },
    { "name": "Mystery", "label": "Mystery" },
    { "name": "Action", "label": "Action" },
    { "name": "Adventure", "label": "Adventure" },
    { "name": "Sci-Fi", "label": "Sci-Fi" },
    { "name": "Drama", "label": "Drama" },
    { "name": "War", "label": "War" },
    { "name": "Family", "label": "Family" },
    { "name": "Biography", "label": "Biography" },
    { "name": "Music", "label": "Music" },
    { "name": "Western", "label": "Western" },
    { "name": "History", "label": "History" },
    { "name": "Musical", "label": "Musical" },
    { "name": "Animation", "label": "Animation" },
    { "name": "Sport", "label": "Sport" },
    { "name": "Film-Noir", "label": "Film-Noir" },
    { "name": "News", "label": "News" },
    { "name": "Game-Show", "label": "Game-Show" },
    { "name": "Reality-TV", "label": "Reality-TV" },
    { "name": "Talk-Show", "label": "Talk-Show" }
  ]

  const [movieSearch, setMovieSearch] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const [userSearch, setUserSearch] = useState();
  const [userYear, setUserYear] = useState();
  const [userGenre, setUserGenre] = useState();

  const handleChange = ((e) => {
    console.log("event ", e)
    console.log("event value ", e.target.value)
    console.log("event name ", e.target.name)
    switch (e.target.name) {
      case 'movieGenre': setMovieGenre(e.target.value)
      case 'movieSearch': setMovieSearch(e.target.value)
      case 'movieYear': setMovieYear(e.target.value)
    }
  });

  const handleSubmitMovies = ((e) => {
    e.preventDefault()
    //let searchTerm = e.target[0].value
    console.log("e ", e)
    console.log("e ", e.target)
    console.log({ movieSearch })
    //console.log(searchTerm)
  });

  const handleChangeUser = ((e) => {
    console.log("event ", e.target.value)
    setUserSearch(e.target.value)
  });

  const handleSubmitUser = ((e) => {
    e.preventDefault()
    //let searchTerm = e.target[0].value
    console.log("e ", e)
    console.log("e ", e.target)
    console.log({ userSearch })
    //console.log(searchTerm)
  });

  const handleMovieGenre = ((e) => {
    console.log("Genre ", e)
  });

  const hGenres = () => {
    Genres.map((item) => {
      console.log(item)
    })
  }
  function years(start, end) {
    var ans = [];
    for (let i = start; i >= end; i--) {
      ans.push(i);
    }
    return ans;
  }

  const year = years(2021, 1900)
  //console.log("pp ",year)


  useEffect(() => {
    //console.log(Genres)
  });
  return (
    <div className="about">
      <ShyLink label="See Statistics >" route="/search-movie/statistics"/>
      <ShyLink label="movie 123" route="/movie-details/123"/>
      <div className="container">
      <div className="upperPadding">
        <div className="row">
          
          <div className="col-sm">
          <Form>
            <Form.Group controlId="searchMovie">
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" aria-label="movieSearch" name="movieSearch"
                onChange={handleChange} placeholder="Search movie"
              />
            </Form.Group>
            <Form.Group controlId="MovieGenres">
              <Form.Control defaultValue="Genre" as="select"
                onChange={handleChange} aria-label="Genre" name="movieGenre">
                <option>Genre</option>
                {Genres.map(p => (
                  <option key={p.name} value={p.name}>{p.label}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control as="select" aria-label="year" name="movieYear"
                onChange={handleChange} defaultValue="Choose year" >
                <option>Year</option>
                {year.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control type="submit" value="Submit"
                onClick={handleSubmitMovies} />
            </Form.Group>
          </Form>
          </div>
          <div className="col-sm">
          <Form>
            <Form.Group controlId="searchUser">
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" aria-label="userSearch" name="userSearch"
                onChange={handleChangeUser} placeholder="Search Actor or Director"
              />
            </Form.Group>
            <Form.Group controlId="UserGenres">
              <Form.Control defaultValue="Genre" as="select"
                onChange={handleChangeUser} aria-label="Genre" name="userGenre">
        <option>Genre</option>
                {Genres.map(p => (
                  <option key={p.name} value={p.name}>{p.label}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control as="select" aria-label="year" name="userYear"
                onChange={handleChangeUser} defaultValue="Choose year">
                <option>Year</option>
                {year.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control type="submit" value="submit"
                onClick={handleSubmitUser} />
            </Form.Group>
          </Form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieSearchPage;
