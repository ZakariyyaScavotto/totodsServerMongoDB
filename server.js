const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

const mongoose = require("mongoose")

require("dotenv").config()
const source = process.env.ATLAS_CONNECTION
mongoose.connect(source, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once("open", () => {
	console.log("DB connected.")
})

const taskRoutes = require("./controllers/task.controller")
app.use("/tasks", taskRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT)
})
