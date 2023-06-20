const express=require('express')
const {registerUser,login, getmyprofile, logout}  = require('../controllers/user')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const { newTask, getmyTask, deletetask, updatetask } = require('../controllers/task')
const router=express.Router()
// user routes
router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/logout').post(logout)
// get user inforrmation
router.route('/me').get(isAuthenticated,getmyprofile)

// task routes
router.route('/task/new').post(isAuthenticated,newTask)
// get a users task
router.route('/task/gettask').get(isAuthenticated,getmyTask)


router.route('/task/:id').delete(isAuthenticated,deletetask).put(isAuthenticated,updatetask)



module.exports=router