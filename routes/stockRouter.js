const stockController = require('../controllers/stockController.js')

const router = require('express').Router()

// add a new customer to the table
router.post('/', stockController.addStock)

// access all the customers in the table
router.get('/', stockController.getAllStocks)

// access one customer by id
router.get('/:id', stockController.getOneStock)

// modify one customer by id
router.put('/:id', stockController.updateStock)

// delete one customer by id
router.delete('/:id', stockController.deleteStock)

module.exports = router