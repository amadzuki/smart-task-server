'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      'tasks',
      [
        {
          task: 'Create name and logo',
          taskStart: '2020-10-15 07:00:00+07',
          taskDuration: '00:30:00',
          location: 'Home',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Design mockup in Figma',
          taskStart: '2020-10-15 07:00:00+07',
          taskDuration: '00:45:00',
          location: 'Home',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Create scaffold template for web',
          taskStart: '2020-10-15 10:00:00+07',
          taskDuration: '01:30:00',
          location: 'Office',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Create scaffold template for API',
          taskStart: '2020-10-15 10:00:00+07',
          taskDuration: '02:00:00',
          location: 'Office',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Collect asset images',
          taskStart: '2020-10-15 13:00:00+07',
          taskDuration: '00:30:00',
          location: 'Home',
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Supervise the project progress',
          taskStart: '2020-10-15 20:00:00+07',
          taskDuration: '00:30:00',
          location: 'Home',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkDelete('tasks', null, {
      truncate: true,
      restartIdentity: true,
    })
  },
}
