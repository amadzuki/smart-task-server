const dayjs = require('dayjs')

// const prepositionRegex = /in|at|on|this|next/
const dayRegex = /sunday|monday|tuesday|wednesday|thursday|friday|saturday/i

module.exports = (req, res, next) => {
  const taskString = req.body.string
  const isDayMentioned = dayRegex.test(taskString)

  if (!isDayMentioned) {
    next()
  } else {
    const now = dayjs()
    const nextWeek = dayjs().add(7, 'day')

    const getDaysArray = (start, end) => {
      let array = []
      for (
        let date = new Date(start);
        date <= end;
        date.setDate(dayjs(start).add(1, 'day').format())
      ) {
        array.push(new Date(date))
      }
      return array
    }

    const dateRange = getDaysArray(now, nextWeek)

    console.log(now, nextWeek, dateRange)
    next()
  }
}
