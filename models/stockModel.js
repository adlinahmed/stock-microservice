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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticker: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assetClass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expenseRatio: {
            type: DataTypes.FLOAT ,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        priceChange: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ytd: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        sinceInception: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })

    return Stock
}