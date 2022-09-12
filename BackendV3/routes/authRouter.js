const authController = require ('../controllers/authController')

const router = require('express').Router()

router.post("/register", authController.register)

router.post("/login", authController.login)

router.post("/refreshToken", authController.refreshTokens)

router.put("/forgot-password", authController.updatePassword)


module.exports = router