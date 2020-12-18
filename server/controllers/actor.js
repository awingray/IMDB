const Actor = require('../models/actor');

exports.getActor = async (req, res, next) => {
    try {
        const actor = await Actor.find();
        return res.status(200).json({
            success: true,
            data: actor
        });
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

const _movie = require('../asset/movie.json');

exports.addActor = async (req, res, next) => {
    try {
        let newArr = [];
        for (let arr of _movie) {
            newArr.push(...arr.actors);
        }
        let test = [...new Set(newArr)];
        test = test[0];
        //console.log(test);
        req.body = test;
        console.log(req.body);
        const actor = await Actor.create({
            "name": req.body
        });
        return res.status(201).json({
            success: true,
            data: actor
        });
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

/* exports.addActor = async (req, res, next) => {
    try {
        const actor = await Actor.create(req.body);
        return res.status(201).json({
            success: true,
            data: actor
        });
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
} */