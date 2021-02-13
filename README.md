# Project Report: Group 10 2020 - Web Engineering 
  * Antonin Thioux 
  * Attie Hendriks 
  * Awin Gray
  * Niek Loke
  * Eduard Sabo

This project is assignment for the course Web Engineering.
The goal of this project is to create a basic restful api based on the 
[IMDB Movies Dataset](https://www.kaggle.com/gorochu/complete-imdb-movies-dataset).
The requirements for this project are flexible just general searching and statistics for Movies, Actors and Directors. 
Additional the api should have at-least 1 CRUD endpoint.

## API Design v0.2
For the api we design we choose to split the IMDB Movies Dataset into 2 primary endpoints.
The first endpoint is *movie* which contains information about a movie in the dataset.
The second endpoint is *person* which is a combination of actors and directors.
We choose to join actors and directors into a single endpoint because they both have similar functionalities,
which means we avoid duplicate code. 

We choose to implement CRUD for the *movie* endpoint.
We decided to do this because we are working with a movie dataset it seemed make sense. 
Instead of editing the `.csv` dataset file we choose to use a database.
This is mainly a result of the technology stack that we are using.

As an additional feature we decided to add *Users* to our api.
The motivation for this feature is so that users of the api can easily get statistics about their favorite movies.
This subject to change and hasn't been implemented yet.

### Database UML diagram
The following diagram shows how the data is sorted in the api's database.

![UML Diagram](images/api_uml.png)
- *Users* is the collection of all users using the api.
- *User* is somebody that uses the api. A user has a list of *Favorites*.
- *Favorites* is a list of movies for a single user.
- *Movies* is the collection of all movies in the dataset.
- *Movie* is a single movie in the dataset. A movie has multiple actors and directors.
- *People* all the people that have worked on movies according to the database.
- *Person* a single person that has worked on a movie either an actor or director.

## Documentation v0.2
The postman documentation of the api itself is available
[here](https://documenter.getpostman.com/view/13748815/TVmQcad3).

## Technology Stack
For this api we decided to use the MERN stack.
The MERN, consists of: `mongo`, `node.js`, `express` and `react`.
It uses the module view controller (MVC) architecture. 

![Mern Stack](images/mern.png)

The motivation behind using this stack is because this stack allows for quick development, since it is efficient and mmakes use of common HTML like language JSX.
Additional because the stack uses javascript for everything we don't have to switch between different programming languages. 
Other advantages of MERN are that it is very good in terms of UI rendering and performance, and all technologies involved are open-source.

## Running 
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
/
