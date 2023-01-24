const Podcaster = require('../models/podcaster')
const express = require('express')
const router = express.Router()


router.get('/podcaster', (req, res, next) => {
    Podcaster.find()
        .then((podcaster) => {
            console.log(podcaster)
            return podcaster.map((podcaster) => podcaster)
        })
        .then((podcaster) => {
            res.status(200).json({ podcaster: podcaster })
        })
        .catch(next)
})


router.post('/podcaster', (req, res, next) => {
    Podcaster.create(req.body.podcaster)
        .then((podcaster) => {
            res.status(201).json({ podcaster: podcaster })
        })
        .catch(next)
})

router.get('/podcaster/:id', (req, res, next) => {
    Podcaster.findById(req.params.id)
        .then((podcaster) => {
            res.status(200).json({ podcaster: podcaster })
        })
        .catch(next)
})

router.patch('./podcaster/:id', (req, res, next) => {
    Podcaster.findById(req.params.id)
        .then((podcaster) => {
            return podcaster.updateOne(req.body.character)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

router.delete('./podcaster/:id', (req, res, next) => {
    Podcaster.findById(req.params.id)
        .then((podcaster) => {
            return podcaster.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(console.error)
})

module.exports = router