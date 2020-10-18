module.exports = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: 'Data is not sent along the request' })
  } else {
    const taskDataFromBody = {
      task: req.body.task,
      taskDate: req.body.taskDate,
      taskStart: req.body.taskStart,
      taskDuration: req.body.taskDuration.toString(),
      location: req.body.location,
    }
    req.newTaskData = taskDataFromBody
    next()
  }
}
