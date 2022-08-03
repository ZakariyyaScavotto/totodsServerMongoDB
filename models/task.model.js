const mongoose = require("mongoose")
const Schema = mongoose.Schema

const taskSchema = new Schema({
	text: { type: String, required: true },
	day: { type: String },
	reminder: { type: Boolean }
})

const Task = mongoose.model("Task", taskSchema)
module.exports = Task
