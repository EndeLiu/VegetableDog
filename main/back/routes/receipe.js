const express = require('express')
const router = express.Router()

const moreReceipes = require('../test/moreReceipe')


router.get('/', (req, res, next) => {
  res.send('respond with a resource');
})
router.get('/details', (req, res, next) => {
  const targetName = req.query.name
  if (targetName) {
    const target = moreReceipes.filter(i => i.name === targetName)
    if (target.length > 0) {
      res.send(target[0])
    } else {
      res.send([])
    }
  }
})
router.get('/lib', (req, res, next) => {
  const {page, vol} = req.query
  res.send(moreReceipes.filter((i, index) => {
    if (index >= (page - 1) * vol && index < page * vol) {
      return i
    }
  }))
})

module.exports = router
