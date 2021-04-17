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
app.set('db_url', process.env.DB_URL);
mongoose.connect(app.get('db_url'), { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

app.set('port', process.env.PORT || 5000);
module.exports = app;

// server start
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});