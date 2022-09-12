const db = require('../models')
const { Op } = require("sequelize");


// create main Model
const Disponibility = db.disponibilitys
const User = db.users
const Match_day = db.match_days

//main work


//1. get all dispo

const getAlldispo = async (req, res) => {
    const dispo = await Disponibility.findAll({})
    res.status(200).send(dispo)
}

const getOnedispo = async (req, res) => {
    let userId = req.params.userId
    let match_dayId = req.params.match_dayId
    const dispo = await Disponibility.findOne({
        where: {
            [Op.and]: [
                {userID : userId},
                {matchDayId : match_dayId}
            ] 
        }
    })
    res.status(200).send(dispo)
}


//3. update dispo

const updateDispo = async (req, res) => {

    let userId = req.params.userId
    let match_dayId = req.params.match_dayId
    const dispo = await Disponibility.update(req.body, {
        where: {
            [Op.and]: [
                {userID : userId},
                {matchDayId : match_dayId}
            ] 
        }
     })
    console.log()
    res.status(200).send(dispo)

}



module.exports = {
    getAlldispo,
    getOnedispo,
    updateDispo,
}