const db = require('../models')
const {verify} = require('jsonwebtoken')
const jwt = require('../utils/JWT')
const bcrypt = require('bcrypt')


const User = db.users
const Match_day = db.match_days


// 1. create user

const register = async (req, res) => {

    let info = {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_admin: req.body.is_admin ? req.body.is_admin : false
    }

    //verify Field


    //verify email's user
    const alreadyExitsUser = await User.findOne({where: {email : info.email}})
    .catch((err) => {
        console.log('Error: ', err);
    });

    if(alreadyExitsUser){
        return res.status(401).json({message: 'Email already exists in DB!'});
    }

    //add user in DB
    const user = await User.create(info)

    //add relation with users for the table disponibilitys
    let match_day = await Match_day.findAll()
    user.addMatch_days(match_day)

    res.status(200).send(user)
    console.log(user)
}

//2.login

const login = async (req,res) => {

    const { email, password } = req.body;
    const user = await User.findOne({where:{email}})

    //checking if the email exits
    if(!user)
        return res.status(401).json({ message: "Email or password does not match!"});

    //checking if the password is correct
    if(await bcrypt.compare(password, user.password) === false)
        return res.status(401).json({ message: "Email or password does not match!"});

    //create and assign a token
    const accessToken = jwt.createTokens(user)
    const expiresIn = 5000;
    res.status(200).json({"accessToken": accessToken, "expiresIn": expiresIn});
}

//3. forgot password
const updatePassword = async (req, res) => {
    const {email, password} = req.body;
    //verify email's user
    const alreadyExitsUser = await User.findOne({where: {email :  email}})
    if(!alreadyExitsUser){
        return res.status(400).json({message: 'Email does not exist'});
    } 
    //update password
    else {
        try{
            const newPassword = await User.update({password: password}, { where: {email: email}})
            res.status(200).send(newPassword)
        }
        catch{
            res.status(400)
        }
    }
}

//4. (TODO) refresh a token

const refreshTokens = async (req,res) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.sendStatus(401)

    verify(token, process.env.JWT_REFRESH_SECRET, async (err, user) =>{
        if(err){
            return res.sendStatus(401)
        }
        const userDB = await User.findOne({where:{email: user.email}});

        //checking if the email exits
        if(!userDB)
            return res.status(400).json({ message: "Email does not exist in DB"});

        delete user.iat;
        delete user.exp;
        const refreshTokens = jwt.refreshTokens(user);
        res.send({
            accessToken: refreshTokens,
        });
    });
}


module.exports = {
    register,
    login,
    updatePassword,
    refreshTokens,
}