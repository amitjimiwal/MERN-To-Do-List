// login
//register

const Users = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendCookie = require("../middlewares/sendCookie");


exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await Users.findOne({ email });
    if (user) {
      return res.status(404).json({
        success: false,
        message: "User already exist",
      });
    }
    const hasspassword = await bcrypt.hash(password, 10);
    user = await Users.create({
      name,
      email,
      password: hasspassword,
    });
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Cant create user",
    });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or adress",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or adress",
      });
    }
    sendCookie(user, res, "Login Successfully", 200);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Invalid email or password",
    });
  }
};

exports.getmyprofile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

exports.logout =(req,res)=>{
      res.cookie("token", null, {
            maxAge:0,
            sameSite: process.env.NODE_ENV==="DEV"? "lax":"none",
            secure: process.env.NODE_ENV==="DEV"? false:true,
      }
      ).json({
            success:true,
            message:"Logout Successfull"
      })
}
