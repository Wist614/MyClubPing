const db = require('../models')
const sequelize = require('sequelize')

// create main Model
const Match_day = db.match_days
const Match = db.matchs
const User = db.users

//main work

// 1. create match_day
const addMatch_day = async (req, res) => {

    //add match_day in DB
    let info = {
        name: req.body.name,
        date: req.body.date,
    }

    //verify name's day
    const alreadyExitsName = await Match_day.findOne({where: {name : info.name}})
    .catch((err) => {
        console.log('Error: ', err);
    });

    if(alreadyExitsName){
        return res.status(400).json({message: 'Name already exist'});
    }
    const match_day = await Match_day.create(info)

    //add relation with users for the table disponibilitys
    let user = await User.findAll();
    match_day.addUsers(user)


    res.status(200).send(match_day)
    console.log(match_day)
}

//2. get all match_day

const getAllMatch_days = async (req, res) => {
    const match_days = await Match_day.findAll({
        order: [['date']]
    })
    res.status(200).send(match_days)
}

//3. get single match_day

const getOneMatch_day = async (req, res) => {

    let id = req.params.id
    const match_day = await Match_day.findOne({ where: {id: id}})
    res.status(200).send(match_day)

}

//4. update match_day

const updateMatch_day = async (req, res) => {

    let id = req.params.id
    const match_day = await Match_day.update(req.body, { where: {id: id}})
    res.status(200).send(match_day)

}

//5. delete match_day by id

const deleteMatch_day = async (req, res) => {

    let id = req.params.id
    await Match_day.destroy({ where: {id: id}})
    res.status(200).send('match_day is deleted !')

}

//6. get all matchs for a single match_day

const getMatch_day_Matchs = async (req,res) => {

    const id = req.params.id

    const data = await Match_day.findOne({
        include: [{
            model: Match,
            as: 'matchs'
        }],
        where: { id: id }
    })

    res.status(200).send(data)
}


module.exports = {
    addMatch_day,
    getAllMatch_days,
    getOneMatch_day,
    updateMatch_day,
    deleteMatch_day,
    getMatch_day_Matchs
}