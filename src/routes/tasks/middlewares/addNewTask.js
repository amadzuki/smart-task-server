const models = require('../../../models')
const Task = models.task

module.exports = async (req, res) => {
  const { task, taskDate, taskStart, taskDuration, location } = req.newTaskData
  const userId = +req.decodedToken.id

  const newTask = {
    task: task,
    taskDate: taskDate,
    taskStart: taskStart,
    taskDuration: taskDuration,
    location: location,
    userId: userId,
  }
  console.log(newTask)
  const createdTask = await Task.create(newTask)

  res
    .status(200)
    .send({ message: 'Task successfully created', data: createdTask })
}
