const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

require('dotenv/config')

const postsRoute = require('./routes/posts')

app.use(bodyParser.json())

app.use('/posts', postsRoute)
// Routes Here!
app.get('/', (req, res) => {
    res.send('we are on home')
})


// COnnect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },  () => {
    console.log('connected to db')
})


//Listen the server
app.listen(3000)