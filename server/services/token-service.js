const jwt = require('jsonwebtoken');

class tokenServices {
    accessToken () {
        const accessToken =  jwt.sign(...., {

        })

    }

    refreshToken () {
        const refreshToken = jwt.sign(......arguments, {
            
        })

    }

}


module.exports = new tokenServices()

