const matchController = require ('../controllers/matchController')

const router = require('express').Router()

router.post('/addMatch', matchController.addMatch)

router.get('/allMatchs', matchController.getAllMatchs)


router.get('/:id', matchController.getOneMatch)

router.put('/:id', matchController.updateMatch)

router.delete('/:id', matchController.deleteMatch)

module.exports = router