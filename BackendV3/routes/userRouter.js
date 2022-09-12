const userController = require ('../controllers/userController')
const jwtAccess = require('../utils/JWT')


const router = require('express').Router()

router.post('/addUser', userController.addUser)

router.get('/allUsers', userController.getAllUsers)

router.get('/is_admin', userController.getAdminUser)

router.get('/dispos/:id', userController.getUserDispo)

router.get('/oneUser/:id', userController.getOneUser)

router.get('/me', jwtAccess.authenticateToken, userController.getUserProfile)

router.put('/:id', userController.updateUser)

router.put('/dispos/:userId/:match_dayId', userController.updateUserDispo)

router.delete('/:id', userController.deleteUser)

module.exports = router