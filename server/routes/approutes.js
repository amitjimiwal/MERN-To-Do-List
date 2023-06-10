const express=require('express')
const {registerUser,login, getmyprofile, logout}  = require('../controllers/user')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const router=express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/me').get(isAuthenticated,getmyprofile)
module.exports=router