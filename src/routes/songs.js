const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', (req, res) => {
    res.send("Hello world")
})

router.post('/', (req, res) => {

    const { title, soc, sofp, tcen } = req.body

    const song = new Song({
        title: title,
        soc: soc,
        sofp: sofp,
        tcen: tcen,
    })

    song.save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(422).json({ message: err })
        })
})

module.exports = router