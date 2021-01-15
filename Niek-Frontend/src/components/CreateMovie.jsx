import React from "react";

function CreateMovie() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-ce  nter my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Create Movie</h1>
            <p>
              Here comes the ability to create a movie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMovie;
