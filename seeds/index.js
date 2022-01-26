const db = require('../models/index')

const Stock = db.Stocks
const fs = require('fs');
const path = require('path');

module.exports = function () {
    fs.readFile (__dirname+'/'+'stocks.csv', 'utf-8', function(error, data){
        if (error) {
            throw error 
        }
        // console.table (data);
        let arr = data.split (',');
        arr.splice (0,11);
        console.log (arr);
    
        let stocks = [];
        let stock = {};
    
        for (let i = 0; i < arr.length; i+=11) {
            stock = {
                symbol: arr[i].replace('\r\n', ''),
                name: arr[i+1],
                lastSale: arr[i+2],
                netChange: arr[i+3],
                changePercent: arr[i+4],
                marketCap: arr[i+5],
                country: arr[i+6],
                ipoYear: arr[i+7],
                volume: arr[i+8],
                sector: arr[i+9],
                industry: arr[i+10]
            }
            stocks.push(stock);
        } 
        console.log(stocks)
    
        stocks.forEach(async(stock) => {
            await Stock.create (stock)
        })
        .catch(error => (console.log(error)))
    })
}

