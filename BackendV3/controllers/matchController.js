const db = require('../models')

// create main Model
const Match = db.matchs
const match_day = db.match_days

//main work

// 1. create match

const addMatch = async (req, res) => {

    let info = {
        /* hour: req.body.hour,
        opponent: req.body.opponent,
        location: req.body.location, */
        name_team: req.body.name_team,
        /* player_1: req.body.player_1,
        player_2: req.body.player_2,
        player_3: req.body.player_3,
        player_4: req.body.player_4, */
    }

    const match = await Match.create(info)
    res.status(200).send(match)
    console.log(match)
}

//2. get all match

const getAllMatchs = async (req, res) => {
    const match = await Match.findAll({})
    res.status(200).send(match)
}

//3. get single match

const getOneMatch = async (req, res) => {

    let id = req.params.id
    const match = await Match.findOne({ where: {id: id}})
    res.status(200).send(match)

}

//4. update match

const updateMatch = async (req, res) => {

    let id = req.params.id
    const match = await Match.update(req.body, { where: {id: id}})
    res.status(200).send(match)

}

//5. delete match by id

const deleteMatch = async (req, res) => {

    let id = req.params.id
    await Match.destroy({ where: {id: id}})
    res.status(200).send('match is deleted !')

}



module.exports = {
    addMatch,
    getAllMatchs,
    getOneMatch,
    updateMatch,
    deleteMatch,
}