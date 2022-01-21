const stockController = require('../controllers/stockController.js')

const router = require('express').Router()

router.post('/', stockController.addStock)

router.get('/', stockController.getAllStocks)

router.get('/:id', stockController.getOneStock)

router.put('/:id', stockController.updateStock)

router.delete('/:id', stockController.deleteStock)

module.exports = router