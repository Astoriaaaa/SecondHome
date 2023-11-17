const Profiles = require('../db/dbModel')
const getUserInfo = async (req, res) => {
    const queryObject = {}
    if(req.query.username && req.query.password) {
        queryObject.password = req.query.password
        queryObject.username = req.query.username
    }

    let result =  Profiles.find(queryObject)
    const user = await result
    if(user.length == 0) {
        res.status(400).send("error")
    }
    else {
        res.status(200).json(user)
    }
}

const createProfile = async (req, res) => {

    if(!req.body.username || !req.body.password) {
        res.status(404).json({msg: "username or password feild empty"})
    }
    else
    {
        Profiles.create(req.body)
        res.status(202).json({msg: "user added"})
    }
    
}

module.exports = {createProfile, getUserInfo}
