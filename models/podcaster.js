const mongoose = require('mongoose')

const podcasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    funnyLevel: {
        type: Number,
        required: true
    }
})



const Podcaster = mongoose.model('Podcaster', podcasterSchema)

module.exports = Podcaster