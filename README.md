# This is a "wishful" development of the backend side of things. 
## Ignore the server folder

### create a blank file called:   .env    
#### and put in:

```

  PORT=4000
  NODE_ENV=development
  DB_URL=mongodb+srv://admin:admin@cluster0.6vb9c.mongodb.net/imdb?retryWrites=true&w=majority
```
### Save and then:


Run "node server.js" 


## Whats up with all the folders and files?

folder: routes -> for endpoints hence "routes"\
folder: helpers -> any cool functions that can be used e.g. stats calculations/visuals etc.     see utility folder from the first backend iteration,\
folder: core -> anything common with the mainline that will be referenced a lot (probably shouldnt touch atm)\
folder: database -> mvc of the app\
  folder: database/config -> configs for connecting to the cloud mongo db (dont touch this) \
  folder: database/controllers -> all functionalities here\
  folder: database/models -> models for everything in the app (currently actors/movies/uesrs etc.)
  
  
    the "actors" shall be just "person" just to simplify with all individuals (unifying directors/extra/etc.)
