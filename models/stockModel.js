module.exports = (sequelize, DataTypes) => {

    const Stock = sequelize.define('stock', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        mutualFundId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            type: DataTypes.FLOAT,
            allowNull: false
        },
        netChange: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        percentChange: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        marketCap: {
            type: DataTypes.FLOAT,
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