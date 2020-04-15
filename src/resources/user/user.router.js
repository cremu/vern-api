const { Router } = require('express')

const router = Router()

// complete route: /api/user

router
  .route('/')
  .get((req, res) => {
    res.send('GET: retreives all users')
  })
  .post((req, res) => {
    res.send('POST: creates new user')
  })

// complete route: /api/user/:id
router
  .route('/:id')
  .get((req, res) => {
    res.send('GET: gets user by id')
  })
  .put((req, res) => {
    res.send('UPDATE: updates user with id')
  })
  .delete((req, res) => {
    res.send('DELETE: deletes user with id')
  })

module.exports = router
