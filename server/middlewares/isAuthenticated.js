const jwt = require("jsonwebtoken")
const Users = require("../models/User")
exports.isAuthenticated=async(req,res,next)=>{
      const token=req.cookies.token
      if(!token){
            return res.status(404).json({
               success:false,
               message:"Login first"
            })
      }
      const decoded=jwt.verify(token,process.env.SECRET_KEY)
      req.user=await Users.findById(decoded._id)
      next()
}