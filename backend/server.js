const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const movie = require('./asset/movie.json');

app.get('/', (req, res) => {
    res.send('Alive');
})

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
    // let page = req.body.page || 20
    // let size = req.body.size || 0;

    return res.status(200).json({
        error: false,
        movie: movie.splice(0, 20)
    })
})


function sortData(a, b) {
    return new Date(a.year).getTime() - new Date(b.year).getTime();
}


app.get('/getMovieByActor/:value', (req, res) => {
    let value = req.params.value;
    let nAc = []


    var filteredArray = movie.filter(element => element.actors
        .some(subElement => subElement.toLowerCase() === value.toLowerCase())
    ).map(element => {


        console.log('===', element)
        nAc.push(element)
    })

    setTimeout(() => {

        return res.status(200).send(nAc.sort(sortData))

    }, 3000);

})
app.get('/getMovieByUrl/:url', async (req, res) => {

    let y = await movie.filter(item => item.imdb_url.split('/')[4] === req.params.url)
    return res.status(200).json({
        error: false,
        movie: y
    })
})

function ratedMovie(a, b) {
    return parseFloat(b.users_rating) - parseFloat(a.users_rating);
}

app.get('/top50', async (req, res) => {
    let rated = await movie.sort(ratedMovie).slice(0, 50)

    return res.status(200).json({
        error: false,
        movie: rated
    })
})

app.get('/getMovieByYear/:value', async (req, res) => {
    let value = req.params.value;
    let dir = []

    var filteredArray = await movie.filter(element => element.year === value.toLowerCase())

    return res.status(200).json({
        error: false,
        movie: filteredArray.sort(ratedMovie)
    })

})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})