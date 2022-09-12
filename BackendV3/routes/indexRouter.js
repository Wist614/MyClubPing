const userRouter = require('./userRouter')
const match_dayRouter = require('./match_dayRouter')
const matchRouter = require('./matchRouter')
const messageRouter = require('./messageRouter')
const stockRouter = require('./stockRouter')
const dispoRouter = require('./disponibilityRouter')
const authRouter = require('./authRouter')
const jwtAccess = require('../utils/JWT')


const router = require('express').Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/match_days', match_dayRouter)
router.use('/matchs', matchRouter)
router.use('/messages', messageRouter)
router.use('/stocks', stockRouter)
router.use('/dispos', dispoRouter)

module.exports = router