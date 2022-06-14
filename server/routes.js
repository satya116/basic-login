const router = require('express').Router()
const authController = require('./controllers/auth');

//authentication
router.post('/reg', authController.register)
router.post('/login', authController.login)

module.exports = router;