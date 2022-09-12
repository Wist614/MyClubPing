const db = require('../models')
const { Op } = require("sequelize");
const jwtUtils = require('../utils/JWT');
const { sequelize } = require('../models');

// create main Model
const User = db.users
const Match_day = db.match_days

//main work

// 1. create user

const addUser = async (req, res) => {

    //add user in DB
    let info = {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_admin: req.body.is_admin ? req.body.is_admin : false
    }

    const user = await User.create(info)

    //add relation with users for the table disponibilitys
    let match_day = await Match_day.findAll()
    user.addMatch_days(match_day)

    res.status(200).send(user)
    console.log(user)
}

//2. get all users

const getAllUsers = async (req, res) => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['num_ref']]
    })
    res.status(200).send(users)
}

//3. get single user

const getOneUser = async (req, res) => {

    let id = req.params.id
    const user = await User.findOne({ 
        attributes: { exclude: ['password'] },
        where: {id: id}})
    res.status(200).send(user)

}

//4. update user

const updateUser = async (req, res) => {

    let id = req.params.id
    const user = await User.update(req.body, { where: {id: id}})
    res.status(200).send(user)

}

//5. delete user by id

const deleteUser = async (req, res) => {

    let id = req.params.id
    await User.destroy({ where: {id: id}})
    res.status(200).send('user is deleted !')

}

//6. get admin user

const getAdminUser = async (req,res) => {

    const users = await User.findAll(
        {attributes: { exclude: ['password']},where: {is_admin: true}})
    res.status(200).send(users)
}

//7. get all dispos from one user

const getUserDispo = async (req, res) => {

    let id = req.params.id
    const user = await User.findOne(
        {attributes: { exclude: ['password']},
        include: {
            model: Match_day,
        },
        where: { id: id },
    })
    res.status(200).send(user)

}

//8. update dispo from user

const updateUserDispo = async (req, res) => {

    let userId = req.params.userId
    let match_dayId = req.params.match_dayId
    const user = await User.update(req.body, {
        include: [{
            model: Match_day,
        }],
        where: {
            [Op.and]: [
                {userID : userId},
                {matchDayId : match_dayId}
            ] 
        }
    })
    res.status(200).send(user)

}

//9. get profil from actual user

const getUserProfile = async (req, res) => {
    res.send(req.user);
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    getAdminUser,
    getUserDispo,
    updateUserDispo,
    getUserProfile
}