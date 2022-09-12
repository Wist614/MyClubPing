const {sign, verify} = require('jsonwebtoken');

const createTokens = (user) => {
    const accessToken = sign({
        id: user.id, 
        email: user.email, 
        first_name: user.first_name, 
        last_name: user.last_name, 
        rank: user.rank, 
        num_ref: user.num_ref,
        phone: user.phone,
        solde: user.solde,
        cotisation: user.cotisation,  
        is_admin: user.is_admin,
    }, 
        process.env.JWT_SECRET,
        {   
            expiresIn: '5000'});

    return accessToken;
}

const refreshTokens = (user) => {
    const accessToken = sign({
        id: user.id, 
        email: user.email, 
        first_name: user.first_name, 
        last_name: user.last_name, 
        rank: user.rank, 
        num_ref: user.num_ref,
        phone: user.phone,
        solde: user.solde,
        cotisation: user.cotisation,  
        is_admin: user.is_admin,
    }, 
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: '1y'});

    return accessToken;
}


//middleware to verify the token from user
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.sendStatus(401)

    verify(token, process.env.JWT_SECRET, (err, user) =>{
        if(err){
            return res.sendStatus(401)
        }
        req.user = user;
        next();
    });
}

module.exports = { 
    createTokens, 
    authenticateToken,
    refreshTokens 
};