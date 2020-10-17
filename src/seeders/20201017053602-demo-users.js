'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ahmad',
          email: 'ahmad@tasks.com',
          hash: '$2y$11$PxhGqiP20IgWlKn.8i1QWuxig3rGIsTLVgF4Mu/QgxqVs0ZLoEX82',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marzuki',
          email: 'marzuki@tasks.com',
          hash: '$2y$11$l1h/t832ayXG90bFBgcKtOVMGd/qv1E4cTsWqjrs9uiQ3R2vufDum',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Blu',
          email: 'blu@tasks.com',
          hash: '$2y$11$8VFkxYXN9H8LW5O7bN64cO9wfHOh2VZZ/nutYBO7xNsC5itJH1qT2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Admin',
          email: 'admin@tasks.com',
          hash: '$2y$11$QKWlp.Mk8bT5SI2wYx3go.9yxASwgn3FEeK7vitG2Qxa3zztQfJLS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Superuser',
          email: 'superuser@tasks.com',
          hash: '$2y$11$m4R6scwzPPVZc3CnOAMTjuLKOaWLMskr7XswwiMpIhakOYAQZ7hVO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ahmad',
          email: 'ahmad@tasks.com',
          hash: '$2y$11$PxhGqiP20IgWlKn.8i1QWuxig3rGIsTLVgF4Mu/QgxqVs0ZLoEX82',
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
    return queryInterface.bulkDelete('users', null, {
      truncate: true,
      restartIdentity: true,
    })
  },
}
