const { Router } = require('express')

const router = Router()

// complete route: api/script
router
  .route('/')
  .get((req, res) => {
    res.send('GET: retrieves all scripts')
  })
  .post((req, res) => {
    res.send('POST: creates a new script')
  })

// complete route: /script/:id
router
  .route('/:id')
  .get((req, res) => {
    res.send('GET: gets script by id')
  })
  .put((req, res) => {
    res.send('UPDATE: updates script with id')
  })
  .delete((req, res) => {
    res.send('DELETE: deletes script with id')
  })

module.exports = router
