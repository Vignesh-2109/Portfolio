const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signup route
exports.signup=async(req,res)=>{
    //getting user data from req.body
    const {name,email,password}=req.body;
    let user;
    try {
        //checking if user already exists
    user =await User.findOne({email});
    if(user) return res.status(400).json({ msg:"User already Exists"});

    //hashing the password
    const securePassword = await bcrypt.hash(password,10);

    //creating new user
    user=await User.create({
        name,
        email,
        password:securePassword,
    });

    //saving user to db
    await user.save();
    return res.status(201).json({ success: true,message: "User created Successfully"});


}
catch(error){
        return res.status(500).json({success:false,message : error.message });


    }
};

exports.login =async(req,res)=>{
    const {email,password}=req.body;
    try {
        //checking if user exists
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({ success:false, message:"Please Sign Up"});
        
        //checking password
        const comparePassword=await bcrypt.compare(password,user.password);
        if(!comparePassword) return res.status(400).json({ success:false, message:"Incorrect Credentials"});
        // if password matches
        //check if "token" cookie exists in request
        const existingToken = req.cookies.token;
        if(existingToken)
        {
            //clear existing token cookie
            res.clearCookie("token");
        }
        //generating token
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"30s"})
        res.cookie("token",token,{
            path:"/",
            httpOnly:true,
            expiresIn: new Date(Date.now()+1000 *30),
            sameSite:"lax",
        });
        return res.status(200).json({success:true,message:"Logged in"});
} catch(error){
    return res.status(500).json({success:false,message : error.message });
}
};

exports.logout = async(req,res)=> {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "Logged out Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

