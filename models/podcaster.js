const mongoose = require('mongoose')
const characterSchema = require('../models/characters')

const podcasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    funnyLevel: {
        type: Number,
        required: false
    },
    characters: [characterSchema]
})



const Podcaster = mongoose.model('Podcaster', podcasterSchema)

module.exports = Podcaster