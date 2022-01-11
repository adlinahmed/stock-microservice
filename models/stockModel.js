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
            autoIncrement: true,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        priceChange: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ytd: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sinceInception: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Stock
}