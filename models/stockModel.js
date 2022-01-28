module.exports = (sequelize, DataTypes) => {

    const Stock = sequelize.define('stocks', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        mutualFundIds: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: true
        },
        volume: {
            type: DataTypes.STRING,
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
    }, 
    
    {
        tableName: 'stocks',
        freezeTableName: true,
        schema: 'public'
    });

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