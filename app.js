const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const loginRoute = require('./routes/login')
const postsRoute = require('./routes/posts')
const app = express()
require('dotenv/config')

app.use(bodyParser.json())
// Routes Here!
app.use('/login', loginRoute)
app.use('/posts', postsRoute)
app.get('/', (req, res) => {
    res.sendFile('./template/main.html', {root:__dirname})
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },  () => {
    console.log('connected to db')
})

//Listen the server
app.listen(3000)