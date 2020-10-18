'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      'subtasks',
      [
        {
          subTask: 'Decide the color theme set',
          subTaskStart: '07:00:00',
          subTaskDuration: '00:15:00',
          parentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subTask: 'Implement components to the design',
          subTaskStart: '07:15:00',
          subTaskDuration: '00:45:00',
          parentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subTask: 'Init React with Redux',
          subTaskStart: '10:00:00',
          subTaskDuration: '01:00:00',
          parentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subTask: 'Implement stylings',
          subTaskStart: '11:00:00',
          subTaskDuration: '00:30:00',
          parentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subTask: 'Init express',
          subTaskStart: '13:00:00',
          subTaskDuration: '00:30:00',
          parentId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subTask: 'Implement sequelize ORM with PostgreSQL',
          subTaskStart: '13:30:00',
          subTaskDuration: '01:30:00',
          parentId: 4,
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
