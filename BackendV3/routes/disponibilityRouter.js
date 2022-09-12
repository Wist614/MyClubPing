const disponibilityController = require ('../controllers/disponibilityController')

const router = require('express').Router()


router.get('/alldispos', disponibilityController.getAlldispo)

router.get('/:userId&:match_dayId', disponibilityController.getOnedispo)

router.put('/:userId&:match_dayId', disponibilityController.updateDispo) 


module.exports = router