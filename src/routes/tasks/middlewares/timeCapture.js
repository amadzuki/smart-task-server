const amPmRegex = /[\d]{1,2}:[\d]{1,2}[\s][aApP][mM]|[\d]{1,2}:[\d]{1,2}[aApP][mM]|[\d]{1,2}[aApP][mM]|[\d]{1,2}[\s][aApP][mM]/g
const twentyFourRegex = /([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?/g

module.exports = (req, res, next) => {
  const taskString = req.body.string
  const isAmPmMatched = amPmRegex.test(taskString)
  const isTwentyFourMatched = twentyFourRegex.test(taskString)
  if (isAmPmMatched) {
    const time = taskString.match(amPmRegex)
    req.newTaskData.taskStart = time[0]
    next()
  } else if (isTwentyFourMatched) {
    const time = taskString.match(twentyFourRegex)
    req.newTaskData.taskStart = time[0]
    next()
  } else {
    next()
  }
}
