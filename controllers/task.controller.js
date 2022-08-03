const Task = require("../models/task.model")
const router = require("express").Router()

router.route("/new").post((req, res) => {
	const newTask = new Task(req.body)

	newTask
		.save()
		.then((task) => res.json(task))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/").get((req, res) => {
	Task.find()
		.then((allTasks) => res.json(allTasks))
		.catch((err) => res.status(400).json("Error! " + err))
})

router.route("/delete/:id").delete((req, res) => {
	Task.deleteOne({ _id: req.params.id })
		.then((success) => res.json("Success! Task deleted."))
		.catch((err) => res.status(400).json("Error! " + err))
})

router.route("/update/:id").put((req, res) => {
	Task.findByIdAndUpdate(req.params.id, req.body)
		.then((task) => res.json("Success! Task updated."))
		.catch((err) => res.status(400).json("Error! " + err))
})

module.exports = router
