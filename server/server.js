import express from 'express'
import cors from 'cors'
import {readdirSync} from "fs"
import mongoose from 'mongoose'
const morgan = require("morgan")
require("dotenv").config()

//Create Express App
const app = express()

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log("**DB CONNECTED**"))
.catch((err) => console.log("DB CONNECTION ERR => ", err))

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