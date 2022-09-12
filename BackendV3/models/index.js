const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch((err) => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.match_days = require('./match_dayModel.js')(sequelize,DataTypes)
db.matchs = require('./matchModel.js')(sequelize, DataTypes)
db.messages = require('./messageModel.js')(sequelize,DataTypes)
db.stocks = require('./stockModel.js')(sequelize,DataTypes)
db.disponibilitys = require('./disponibilityModel.js')(sequelize,DataTypes)

// Relation between match_day and match

db.match_days.hasMany(db.matchs, {
    foreignKey: 'match_day_id',
    as: 'matchs'
})

db.matchs.belongsTo(db.match_days, {
    foreignKey: 'match_day_id',
    as: 'match_day'
})

//relation between user and match_day

db.users.belongsToMany(db.match_days, { 
    through: 'disponibilitys'
})

db.match_days.belongsToMany(db.users, { 
    through: 'disponibilitys'
})

//sync database

db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db