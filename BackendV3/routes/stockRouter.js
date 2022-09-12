const stockController = require ('../controllers/stockController')

const router = require('express').Router()

router.post('/addStock', stockController.addStock)

router.get('/allStocks', stockController.getAllStocks)


router.get('/:id', stockController.getOneStock)

router.put('/:id', stockController.updateStock)

router.delete('/:id', stockController.deleteStock)

module.exports = router