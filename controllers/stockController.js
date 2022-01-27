const db = require('../models/index')

const Stock = db.Stocks

// console.log(db)

const addStock = async (req,res) => {
    let input_data = {
        mutualFundId: req.body.mutualFundId,
        symbol: req.body.symbol,
        name: req.body.name,
        lastSale: req.body.lastSale,
        netChange: req.body.netChange,
        changePercent: req.body.changePercent,
        marketCap: req.body.marketCap,
        country: req.body.country,
        ipoYear: req.body.ipoYear,
        volume: req.body.volume,
        sector: req.body.sector,
        industry: req.body.industry
    }
    const stock = await Stock.create(input_data)
    res.status(200).send(stock)
}

const addSeedStock = async (incomingStock) => {
    let input_data = {
        mutualFundId: ~~(Math.random() * 130 + 1),
        symbol: incomingStock.symbol,
        name: incomingStock.name,
        lastSale: incomingStock.lastSale,
        netChange: incomingStock.netChange,
        changePercent: incomingStock.changePercent,
        marketCap: incomingStock.marketCap,
        country: incomingStock.country,
        ipoYear: incomingStock.ipoYear,
        volume: incomingStock.volume,
        sector: incomingStock.sector,
        industry: incomingStock.industry
    }
    const stock = await Stock.create(input_data)
    // console.log(stock.toJSON())
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
    addStock : addStock,
    addSeedStock : addSeedStock,
    getAllStocks : getAllStocks,
    getOneStock : getOneStock,
    updateStock : updateStock,
    deleteStock : deleteStock
}