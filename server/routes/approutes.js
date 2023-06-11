const express=require('express')
const {registerUser,login, getmyprofile, logout}  = require('../controllers/user')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const { newTask } = require('../controllers/task')
const router=express.Router()
// user routes
router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/me').get(isAuthenticated,getmyprofile)


// task routes
router.route('/task/new').post(isAuthenticated,newTask)
module.exports=router