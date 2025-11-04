import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateToken=(userId)=>{
  const token = jwt.sign({ userId }, process.env.JWT_SECRET,{expiresIn:"7d"});
  return token;

}
//controller for user registration
//post: /api/users/register

export const registerUser=async(req,res)=>{
try {
  const{name,email,password}=req.body;

  //check if rquired field are present
  if(!name || !email|| !password){
    return res.status(400).json({message:"missing required fields"})
  }
  //check if user already exists
  const user=await User.findOne({email});
  if(user){
    return res.status(400).json({ message: "user already exists" });
  }

  // create new user
  const hashedPassword= await bcrypt.hash(password,10)

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

//return success message
const token=generateToken(newUser._id)
newUser.password="undefined";

return res.status(201).json({message:"user created sucessfully",token,user:newUser})
  
} catch (error) {

  return res.status(400).json({message:error.message})
}
}

//controller for user login
//post: /api/users/login

export const loginUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if user exists
  
 
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //return success message
    const token = generateToken(newUser._id);
    newUser.password = "undefined";

    return res
      .status(201)
      .json({ message: "user created sucessfully", token, user: newUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};