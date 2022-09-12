const db = require('../models')

// create main Model
const Stock = db.stocks

//main work

// 1. create stock

const addStock = async (req, res) => {

    let info = {
        name: req.body.name,
    }

    const stock = await Stock.create(info)
    res.status(200).send(stock)
    console.log(stock)
}

//2. get all stocks

const getAllStocks = async (req, res) => {
    const stock = await Stock.findAll({})
    res.status(200).send(stock)
}

//3. get single stock

const getOneStock = async (req, res) => {

    let id = req.params.id
    const stock = await Stock.findOne({ where: {id: id}})
    res.status(200).send(stock)

}

//4. update stock

const updateStock = async (req, res) => {

    let id = req.params.id
    const stock = await Stock.update(req.body, { where: {id: id}})
    res.status(200).send(stock)

}

//5. delete stock by id

const deleteStock = async (req, res) => {

    let id = req.params.id
    await Stock.destroy({ where: {id: id}})
    res.status(200).send('stock is deleted !')

}


module.exports = {
    addStock,
    getAllStocks,
    getOneStock,
    updateStock,
    deleteStock,
}