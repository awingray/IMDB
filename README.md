# Group 10 2020
<!-- todo: general description -->

## API Design V0.2
<!-- todo: describe organization of project -->

### Database UML diagram
The following diagram shows how the data is sorted in this api.
![UML Diagram](images/api_uml.png) <!-- todo: update this -->
- *Actors* is the collection of all actors in the dataset.
- *Actor* is an individual actor in the dataset. An actor has performed in multiple movies.
- *Movies* is the collection of all movies in the dataset.
- *Movie* is a single movie in the dataset. A movie has multiple actors and directors.
- *Directors* is the collection of all directors in the dataset.
- *Director* is an individual director in the dataset. A director directed multiple movies.

## Documentation
<!-- todo: update this -->
See documentation [here](https://documenter.getpostman.com/view/13748815/TVmQcad3).

## Technology Stack
<!-- todo: describe the tech stack here -->

## Running 
<!-- todo: insert other readme here -->
*If doesn't exist, create a blank file called: `.env` and put in:*
```
PORT=4000
NODE_ENV=development
DB_URL=mongodb+srv://admin:admin@cluster0.6vb9c.mongodb.net/imdb?retryWrites=true&w=majority
```
*Save and then run: `node server.js`*

## Folders
<!-- todo: insert other readme here -->
`routes` -> for endpoints hence `routes` 

`helpers` -> any cool functions that can be used e.g. stats calculations/visuals etc.
See `utility` folder from the first backend iteration

`core` -> anything common with the mainline that will be referenced a lot (probably shouldn't touch atm)

`database` -> mvc of the app

`database/config` -> configs for connecting to the cloud mongo db (don't touch this)

`database/controllers` -> all functionalities here

`database/models` -> models for everything in the app (actors/movies/users etc.)
