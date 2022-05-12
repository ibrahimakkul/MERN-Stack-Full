import User from "../model/User";
import bcrypt from 'bcryptjs';

export const getAllUser=async (req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }
    catch(err){
        return  console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"no users"});
    }
    return res.status(200).json({users});
}
export const signup=async (req,res,next) =>{
    const {name,email,password}=req.body;

    let existingUser;
    try{
        existingUser =await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exixts! Login Instead"})
    }const hash=bcrypt.hashSync(password)
    const user=new User({
        name,
        email,
        password :hash,
        blogs:[]
    });

    
    try{
       await user.save();
    }
    catch(err){
        return  console.log(err)
    }
    return res.status(201).json({user});
}
export const login= async (req,res,next) =>{
    const {email,password}=req.body;

    let existingUser;
    try{
        existingUser =await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }if(!existingUser){
        return res.status(404).json({message: "Couldt find user by this email"});
    }
    const isPassword=bcrypt.compareSync(password,existingUser.password);
    if(!isPassword){
        return res.status(400).json({message :"incorrect password"});
    }
    //console.log({message:"login successfull" ,user:existingUser})
    return res.status(200).json({message:"login successfull" ,user:existingUser});
}
    