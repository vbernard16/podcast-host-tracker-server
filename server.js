const mongoose = require('mongoose')
const express = require('express')
const db = require('./config/db')
const cors = require('cors')


mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const podcasterRoutes = require('./routes/podcaster-routes.js')

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5502` }))

app.use(express.json())


app.use(podcasterRoutes)




app.listen(8000, () => {
    console.log('Server running on port 8000')
})

module.exports = app