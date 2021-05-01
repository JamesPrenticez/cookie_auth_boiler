import express from 'express'
import cors from 'cors'
const morgan = require("morgan")
require("dotenv").config()

//Create Express App
const app = express()

//Apply Middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//Route
app.get('/', (req, res) => {
    res.send('you hit endpoint')
})

//Port
const port = process.env.PORT || 8000

//Listen to our running server
app.listen(port, () => console.log(`Server is running on port ${port}`))