// path is a default node package for handling paths
const path     = require("path")
const express  = require("express")
const app      = express()
const cors     = require('cors');
const mongoose = require("mongoose")

require('dotenv').config();

// default setup stuff
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

const userRouter = require("./routers/userRouter")
const articleRouter = require("./routers/articleRouter")
const projectRouter = require("./routers/projectRouter")

app.use("/user", userRouter)
app.use("/article", articleRouter)
app.use("/project", projectRouter)

// db
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

const port = process.env.PORT || 5000

// server start
app.listen(port, () => {
  console.log("Server running on Port " + port)
})