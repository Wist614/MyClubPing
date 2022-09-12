const messageController = require ('../controllers/messageController')

const router = require('express').Router()

router.post('/addMessage', messageController.addMessage)

router.get('/allMessages', messageController.getAllMessages)


router.get('/:id', messageController.getOneMessage)

router.put('/:id', messageController.updateMessage)

router.delete('/:id', messageController.deleteMessage)

module.exports = router