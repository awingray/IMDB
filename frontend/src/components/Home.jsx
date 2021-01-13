import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

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
  {"type":"header","version":"5.0.4","comment":"Export to JSON plugin for PHPMyAdmin"},
  {"type":"database","name":"imdb"},
  {"type":"table","name":"genres","database":"imdb","data":
  [
  {"name":"Comedy"},
  {"name":"Romance"},
  {"name":"Horror"},
  {"name":"Thriller"},
  {"name":"Crime"},
  {"name":"Fantasy"},
  {"name":"Mystery"},
  {"name":"Action"},
  {"name":"Adventure"},
  {"name":"Sci-Fi"},
  {"name":"Drama"},
  {"name":"War"},
  {"name":"Family"},
  {"name":"Biography"},
  {"name":"Music"},
  {"name":"Western"},
  {"name":"History"},
  {"name":"Musical"},
  {"name":"Animation"},
  {"name":"Sport"},
  {"name":"Film-Noir"},
  {"name":"News"},
  {"name":"Game-Show"},
  {"name":"Reality-TV"},
  {"name":"Talk-Show"}
  ]
  }
  ]


function Home() {
  const [movieSearch, setMovieSearch] = useState();
  const [userSearch, setUserSearch] = useState();

  const handleChange = ((e) => {
    console.log("event ", e.target.value)
    console.log("aMovies", aMovies.rows)
    setMovieSearch(e.target.value)
  });
  const handleSubmit = ((e) => {
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


  return (
    <div className="about">
      <div className="container">

        <div className="row">
          <form>
            <label>
              Search Movie:
                <input type="text" name="movieSearch" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
          <Dropdown
           auto
           onChange={handleMovieGenre}
           source = {Genres}
           value={Genres.name}
           placeholder="Genre"
           />
        </div>
        <div className="row">
          <form>
            <label>
              Search User:
                  <input type="text" name="userSearch" onChange={handleChangeUser} />
            </label>
            <input type="submit" value="submit" onClick={handleSubmitUser} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;
