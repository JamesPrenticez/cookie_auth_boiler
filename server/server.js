import express from 'express'
import cors from 'cors'
import {readdirSync} from "fs"
const morgan = require("morgan")
require("dotenv").config()

//Create Express App
const app = express()

//Apply Middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//Auto Load Routes with map and pre-fix '/api' 
readdirSync("./routes").map((r) =>
    app.use("/api", require(`./routes/${r}`))
)

//Port
const port = process.env.PORT || 8000

//Listen to our running server
app.listen(port, () => console.log(`Server is running on port ${port}`))