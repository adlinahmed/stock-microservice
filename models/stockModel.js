module.exports = (sequelize, DataTypes) => {

    const Stock = sequelize.define('Stocks', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        mutualFundId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastSale: {
            type: DataTypes.STRING,
            allowNull: false
        },
        netChange: {
            type: DataTypes.STRING,
            allowNull: false
        },
        changePercent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marketCap: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ipoYear: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        volume: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sector: {
            type: DataTypes.STRING,
            allowNull: true
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Stock
}

// {
//     "mutualFundId": ,
//     "symbol": "",
//     "name": "",
//     "lastSale": "",
//     "netChange": "",
//     "changePercent": "",
//     "marketCap": "",
//     "country": "",
//     "ipoYear": ,
//     "volume": ,
//     "sector": "",
//     "industry": ""
// }