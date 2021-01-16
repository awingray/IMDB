import React, { Component } from "react";
import Form from "../components/form";

class AddMoviePage extends Component {
  state = {
    movie: {
      title: "",
      rating: "",
      year: "",
      user_rating: "",
      votes: "",
      metascore: "",
      img_url: "",
      countries: "",
      languages: "",
      actors: "",
      genre: "",
      tagline: "",
      description: "",
      directors: "",
      runtime: "",
      imdb_url: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.movie, "submitted");

    // function to get input from state to new movie in api?
  };

  handleChange = ({ currentTarget: input }) => {
    const movie = { ...this.state.movie };
    movie[input.name] = input.value;
    this.setState({ movie });
  };

  render() {
    const { movie } = this.state;

    return (
      <React.Fragment>
        <h1>Add new movie</h1>
        <div className="py-5 container">
          <form onSubmit={this.handleSubmit}>
            <Form
              name="title"
              label="Title"
              value={movie.title}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="rating"
              label="Rating"
              value={movie.rating}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="year"
              label="Year"
              value={movie.year}
              type="number"
              onChange={this.handleChange}
            />
            <Form
              name="user_rating"
              label="User rating"
              value={movie.user_rating}
              type="number"
              onChange={this.handleChange}
            />
            <Form
              name="votes"
              label="Votes"
              value={movie.votes}
              type="number"
              onChange={this.handleChange}
            />
            <Form
              name="metascore"
              label="Metascore"
              value={movie.metascore}
              type="number"
              onChange={this.handleChange}
            />
            <Form
              name="img_url"
              label="Image url"
              value={movie.img_url}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="countries"
              label="Countries (separate by comma)"
              value={movie.countries}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="languages"
              label="Languages (separate by comma)"
              value={movie.languages}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="actors"
              label="Actors (separate by comma)"
              value={movie.actors}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="genre"
              label="Genre (separate by comma)"
              value={movie.genre}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="tagline"
              label="Tagline"
              value={movie.tagline}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="description"
              label="Description"
              value={movie.description}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="directors"
              label="Directors (separate by comma)"
              value={movie.directors}
              type="text"
              onChange={this.handleChange}
            />
            <Form
              name="runtime"
              label="Runtime in minutes"
              value={movie.runtime}
              type="number"
              onChange={this.handleChange}
            />
            <Form
              name="imdb_url"
              label="IMDB url"
              value={movie.imdb_url}
              type="text"
              onChange={this.handleChange}
            />

            <button className="btn btn-primary">Submit form</button>
          </form>
        </div>
        <div className="py-5" />
        <div className="py-5" />
      </React.Fragment>
    );
  }
}

export default AddMoviePage;
