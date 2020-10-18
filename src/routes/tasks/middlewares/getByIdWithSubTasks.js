const models = require('../../../models')
const Task = models.task
const SubTask = models.subtask

module.exports = async (req, res) => {
  const id = +req.params.id
  const tasks = await Task.findAll({
    where: { id: id },
    include: {
      model: SubTask,
      attributes: ['subTask', 'subTaskStart', 'subTaskDuration'],
    },
  })
  if (tasks.length === 0) {
    res.status(404).send({ message: 'Task not found' })
  } else {
    res.status(200).send({ message: 'Task with its subtasks', data: tasks })
  }
}
