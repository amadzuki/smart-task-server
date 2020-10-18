const taskRegex = /.+?(?= on)|.+?(?= at)|.+?(?= this)/

module.exports = (req, res, next) => {
  const taskString = req.body.string
  const taskText = taskString.match(taskRegex)
  const stringCut = taskString.replace(taskText, '')
  req.newTaskData = {}
  req.body.string = stringCut
  req.newTaskData.task = taskText[0]
  next()
}
