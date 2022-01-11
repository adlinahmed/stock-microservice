const db = require('../models/index')

const Stock = db.Stocks

const addStock = async (req,res) => {
    let input_data = {
        mutualFundId: req.body.mutualFundId,
        name: req.body.name,
        ticker: req.body.ticker,
        assetClass: req.body.assetClass,
        expenseRatio: req.body.expenseRatio,
        price: req.body.price,
        priceChange: req.body.priceChange,
        ytd: req.body.ytd,
        sinceInception: req.body.sinceInception
    }
    const stock = await Stock.create(input_data)
    res.status(200).send(stock)
}

const getAllStocks = async (req, res) => {

    let stocks = await Stock.findAll({})
    res.status(200).send(stocks)
}

const getOneStock = async (req, res) => {
    
    let id = req.params.id

    let stocks = await Stock.findOne({where: {id: id}})
    res.status(200).send(stocks)
}

const updateStock = async (req, res) => {
    let id = req.params.id

    const stock = await Stock.update(req.body, { where: {id: id}})
    res.status(200).send(stock)
}

const deleteStock = async (req, res) => {
    let id = req.params.id

    await Stock.destroy({where :{id: id}})
    res.status(200).send(`Stock with id: ${id} is deleted`)
}

module.exports = {
    addStock,
    getAllStocks,
    getOneStock,
    updateStock,
    deleteStock
}