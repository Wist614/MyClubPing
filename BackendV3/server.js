const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express()

var corOptions = {
    origin: 'https://localhost:8200'
}

//middleware
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//routers

const router = require('./routes/indexRouter')

app.use('/api', router)

//testing api

app.get('/', (req, res) => {
    res.json({ message: 'hello from api'})
})

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})