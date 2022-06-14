const userModel = require('../model/userModel')

class Auth {
    async register (req, res) {

     const {username, password, name} = req.body;

     if(!username || !password  || !name) {
        return res.status(403).json({message: 'Invalid wdfefefkehj'})
     }

     try {

        const user = await userModel.findOne({ username: username})

        if(user === null) {
            await userModel.create({username, password, name})
        res.status(200).json({message: 'successfully registered'})

        } else {
            res.status(200).json({message: 'already registered'})
        }
     } catch (error) {
        res.status(404).json({message: "lol"})
     }
    }

    async login (req, res) {
        const {username, password} = req.body;

        const findUser = await userModel.find({username: username, password: password})

        console.log(findUser);

        if(findUser.length === 0 || !findUser || findUser === null) {
           return res.status(404).json({message: 'invalid credentials'})
        }

        if(findUser) {
            res.status(200).json({message: 'login successful'})
        }
    }

}

module.exports = new Auth()