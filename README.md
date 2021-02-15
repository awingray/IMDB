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

## API Design v0.3
For the api we design we choose to split the IMDB Movies Dataset into 3 primary endpoints.
The first endpoint is *movie* which contains information about a movie in the dataset.
The second endpoint is *actor* which contains information about actors in the dataset.
The third endpoint is *director* which contains information about directors in the dataset.
Underwater we choose to join actors and directors into a single module *person* because they both have similar functionalities,
which means we avoid duplicate code. 

We choose to implement CRUD for the *movie* endpoint.
We decided to do this because we are working with a movie dataset it seemed make sense. 
Instead of editing the `.csv` dataset file we choose to use a database.
This is mainly a result of the technology stack that we are using (see details below).

### Database UML diagram
The following diagram shows how the data is sorted in the api's database.

![UML Diagram](doc_images/api_uml2.png)
- *Movies* is the collection of all movies in the dataset.
- *Movie* is a single movie in the dataset. A movie has multiple actors and directors.
- *People* all the people that have worked on movies according to the database.
- *Person* a single person that has worked on a movie either an actor or director.

## Documentation v0.3
The postman documentation of the api itself is available
[here](https://documenter.getpostman.com/view/13748815/TVmQcad3).

## Technology Stack
For this api we decided to use the MERN stack.
The MERN, consists of: `mongo`, `node.js`, `express` and `react`.
It uses the module view controller (MVC) architecture. 

![Mern Stack](doc_images/mern.png)

The motivation behind using this stack is because this stack allows for quick development.
Additional some group members had already worked with MERN and could guide the others to learn the stack.
A neat feature of the MERN stack is that it uses javascript for everything, 
meaning we didn't have to switch between different programming languages.
Other advantages of MERN are that it is very good in terms of UI rendering and performance, and all technologies involved are open-source. 
We could have chosen to use the MEAN stack instead of the MERN stack, since they are very similar. However, in our case there are some advantages to using MERN (with React) compared to MEAN (with Angular). Most importantly, Angular has a steeper learing curve than React, and React offers better documentation. Because of this it seemed better to choose the MERN stack, since some of our group didn't really have experience with web development at all, and others were already more experienced with MERN.

## Running 
### Developer Running
To run the back-end api go to the back-end directory `cd backend`.
First install the needed dependencies run: `npm install`, 
this should create a directory `node_modules` and a file `package-lock.json`.
Now you can run the back-end api: `npm run`.

To run the front-end website go to the front-end directory `cd frontend`.
First install the needed dependencies run: `npm install`, 
This should create a directory `node_modules` and a file `package-lock.json`.
Now you can run the front-end website: `npm run`, 
this should open a webpage in your browser.
Note: make sure the back-end is running otherwise the front-end will not work.

By default JSON is used. To request csv simply add "accept:text/csv" to the header.

### Deploying 
<!-- TODO --->

## Folders
### Back-end
`backend` -> For back-end api related files.

`backend/src` -> Code that makes the back-end work.

`backend/src/core` -> Anything common with the mainline that will be referenced.

`backend/src/database` -> Model view controller (MCV) of the api.

`backend/src/database/config` -> Configs for connecting to the cloud mongo database.

`backend/src/database/controllers` -> All functionalities here.

`backend/src/database/models` -> Models documents for mongo database, models for everything in the api. 

`backend/src/database/validation` -> Joi validation used to check user input.

`backend/src/helpers` -> Any cool functions that can be used e.g. stats calculations/visuals etc 
(see `utility` folder from the first backend iteration).

`backend/src/routes` -> Defines Routes for endpoints hence `routes`.

### Front-end
`frontend` -> For front-end website related files.

`frontend/public` -> Public assets for the website hence `public`.

`frontend/components` -> React components for the website.

`frontend/pages` -> Different pages for the website used by the router.
