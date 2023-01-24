const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Podcaster = require('../models/podcaster')


router.post('/character', (req, res, next) => {
    const podcasterId = req.body.character.podcasterId
    const character = req.body.character  
    

    Podcaster.findById(podcasterId)
        .then((podcaster) => {
            console.log(podcaster)
            podcaster.characters.push(character)

            return podcaster.save()
        })
        .then((podcaster) => {
            res.status(201).json({ podcaster: podcaster })
        })
        .catch(next)
})

router.patch('/character/:characterId', (req, res, next) => {
    const podcasterId = req.body.character.podcasterId
    const newCharacter = req.body.character

    Podcaster.findById(podcasterId)
        .then((podcaster) => {
            const character = podcaster.characters.id(req.body.characterId)
            character.set(newCharacter)

            return podcaster.save()
        })
})

router.delete('/character/:characterId', (req, res, next) => {
    const podcasterId = req.body.character.podcasterId

    Podcaster.findById(podcasterId)
        .then((podcaster) => {
            podcaster.characters.id(req.params.characterId).remove()

            return podcaster.save()
        })
        .then((podcaster) => {
            res.status(200).json({ podcaster: podcaster })
        })
        .catch(next)
})

module.exports = router