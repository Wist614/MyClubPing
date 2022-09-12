const db = require('../models')

// create main Model
const Message = db.messages

//main work

// 1. create message

const addMessage = async (req, res) => {

    let info = {
        title: req.body.title,
        post: req.body.post,
    }

    const message = await Message.create(info)
    res.status(200).send(message)
    console.log(message)
}

//2. get all messages

const getAllMessages = async (req, res) => {
    const message = await Message.findAll({
        order: [['createdAt', 'DESC']]
    })
    res.status(200).send(message)
}

//3. get single message

const getOneMessage = async (req, res) => {

    let id = req.params.id
    const message = await Message.findOne({ where: {id: id}})
    res.status(200).send(message)

}

//4. update message

const updateMessage = async (req, res) => {

    let id = req.params.id
    const message = await Message.update(req.body, { where: {id: id}})
    res.status(200).send(message)

}

//5. delete message by id

const deleteMessage = async (req, res) => {

    let id = req.params.id
    await Message.destroy({ where: {id: id}})
    res.status(200).send('message is deleted !')

}


module.exports = {
    addMessage,
    getAllMessages,
    getOneMessage,
    updateMessage,
    deleteMessage,
}