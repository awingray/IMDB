const Movie = require('../models/movie');

exports.getMovie = async (req, res, next) => {
    try {
        const movie = await Movie.find();
        return res.status(200).json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getMovieTitle = async (reg, res, next) => {
    try {
        const txt = reg.params.text;
        const movie = await Movie.find({
            title: {
                $regex: txt,
                $options: 'i'
            }
        })
        return res.status(200).json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getMovieYear = async (req, res, next) => {
    let year = req.params.year;

    var filteredArray = await movie.filter(element => element.year === year.toLowerCase())

    return res.status(201).json({
        success: true,
        movie: filteredArray.sort(ratedMovie)
    })
}

exports.addMovie = async (req, res, next) => {
    try {
        const movie = await Movie.create(req.body);
        console.log(req.body);
        console.log(movie.actors);
        return res.status(201).json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.updateMovie = async (req, res, next) => {
    try {
        const {
            _id
        } = req.body;
        const newMovie = await Movie.findOneAndUpdate({
                _id
            },
            req.body, {
                new: true
            }, // Return updated one
        );
        return res.status(200).json(newMovie);
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.deleteMovie = async (req, res, next) => {
    try {
        console.log(req.body);

        const movie = await Movie.findById(req.body.id);
        if (!movie) {
            res.status(404).json({
                success: false,
                error: 'Not Found'
            });
        }

        await movie.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {

    }
}