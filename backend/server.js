const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 2000;
const movie = require('./asset/movie.json');
const {
    median,
    getStandardDeviation,
    getMean,
    sortData,
    ratedMovie
} = require('./utility/helper')

//This is just to run a test that the coding is working fine

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '5mb'
}));

app.get('/', (req, res) => {
    res.send('Alive');
})

//
app.get('/allActors', async (req, res) => {
    let newArr = [];
    for (let arr of movie) {
        newArr.push(...arr.actors);
    }

    return res.status(200).json({
        error: false,
        actor: [...new Set(newArr)]
    })
})

app.get('/movies', (req, res) => {
    return res.status(200).json({
        error: false,
        movie: movie.splice(0, 20)
    })
})



app.get('/getMovieByActor/:actorName', async (req, res) => {
    let actorName = req.params.actorName;
    let nAc = []


    var filteredArray = await movie.filter(element => element.actors
        .some(subElement => subElement.toLowerCase() === actorName.toLowerCase())
    ).map(element => {
        nAc.push(element)
    })
    let aMedian = await median(nAc.sort(sortData))
    let standardDev = await getStandardDeviation(nAc.sort(sortData))
    let gMean = await getMean(nAc.sort(sortData))
    return res.status(200).json({
        movies: nAc.sort(sortData),
        median: aMedian,
        SD: standardDev,
        mean: gMean
    })

})
app.get('/getMovieByUrl/:url', async (req, res) => {

    let y = await movie.filter(item => item.imdb_url.split('/')[4] === req.params.url)
    return res.status(200).json({
        error: false,
        movie: y
    })
})


app.get('/top/:len', async (req, res) => {
    let rated = await movie.sort(ratedMovie).slice(0, req.params.len)

    return res.status(200).json({
        error: false,
        movie: rated
    })
})

app.get('/getMovieByYear/:year', async (req, res) => {
    let year = req.params.year;
    let dir = []

    var filteredArray = await movie.filter(element => element.year === year.toLowerCase())

    return res.status(200).json({
        error: false,
        movie: filteredArray.sort(ratedMovie)
    })

})


app.post('/allRounder', async (req, res) => {

    if (!req.body.actorName || req.body.actorName === "" || req.body.actorName === undefined) {
        return res.status(400).json({
            error: true,
            message: "actorName is required"
        })
    }
    if (!req.body.url || req.body.url === "" || req.body.url === undefined) {
        return res.status(400).json({
            error: true,
            message: "url is required"
        })
    }
    if (!req.body.year || req.body.year === "" || req.body.year === undefined) {
        return res.status(400).json({
            error: true,
            message: "year is required"
        })
    }
    let actorName = req.body.actorName;
    let movieUrl = req.body.url;
    let movieYear = req.body.year;

    let newArr = [];
    for (let arr of movie) {
        //Loop through all the movies array and push all the actors to one array
        newArr.push(...arr.actors);
    }

    let allActors = [...new Set(newArr)] //This returns all the actors, using Set makes sure we don't 
    //have more than one occurence for each actors

    let value = actorName;
    let nAc = []


    var filteredArray = await movie.filter(element => element.actors
        .some(subElement => subElement.toLowerCase() === value.toLowerCase())
    ).map(element => {
        nAc.push(element)
    })
    let aMedian = await median(nAc.sort(sortData))
    let standardDev = await getStandardDeviation(nAc.sort(sortData))
    let gMean = await getMean(nAc.sort(sortData))

    //Get movie by splitting the url by / and getting the second to the last element that returns the unique part of the string
    let y = await movie.filter(item => item.imdb_url.split('/')[4] === movieUrl)
    //return res.status(200).json({error: false, movie:y}) 

    let year = req.body.year;
    let dir = []

    var filteredArray = await movie.filter(element => element.year === movieYear.toLowerCase())

    //   return res.status(200).json({error: false, movie: filteredArray.sort(ratedMovie)})


    let rated = await movie.sort(ratedMovie).slice(0, 50)
    //    return res.status(200).json({error: false, movie:rated})
    // return res.status(200).json({movies:nAc.sort(sortData), median:aMedian, SD: standardDev,mean:gMean})

    return res.status(200).json({
        error: false,
        actors: allActors,
        actor_statistics: {
            median: aMedian,
            SD: standardDev,
            mean: gMean
        },
        movie_year: filteredArray.sort(ratedMovie),
        rated_50: rated

    })

})
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})