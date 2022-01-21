const dbConfig = require('../config/dbConfig')
    
const { Sequelize, DataTypes } = require('sequelize')

let sequelize = null;

    if (process && process.env.DATABASE_URL) {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
                }
              }
            }
        );
    } else {
       sequelize = new Sequelize(
        { // use imported configurations from dbConfig
            database: dbConfig.DB,
            username: dbConfig.USER,
            password: dbConfig.PASSWORD,
            dialect: dbConfig.dialect,
            host: dbConfig.HOST,
        })
    }
sequelize.authenticate()
.then(() => { // successfully connected to DB
    console.log("connected to Postgres DB")
})
.catch(e => {// failed connecting to DB
    console.log('unable to connect to Postgres DB' + e)
}) 

const db = {}

db.sequelize = sequelize

db.Stocks = require('./stockModel')(sequelize, DataTypes)

db.sequelize.sync({ force: true }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

module.exports = db