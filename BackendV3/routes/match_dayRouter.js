const match_dayController = require ('../controllers/match_dayController')

const router = require('express').Router()

router.post('/addMatch_day', match_dayController.addMatch_day)

router.get('/allMatch_days', match_dayController.getAllMatch_days)


router.get('/:id', match_dayController.getOneMatch_day)

router.put('/:id', match_dayController.updateMatch_day)

router.delete('/:id', match_dayController.deleteMatch_day)

//get Match_day Matchs

router.get('/getMatch_day_Matchs/:id', match_dayController.getMatch_day_Matchs)

module.exports = router