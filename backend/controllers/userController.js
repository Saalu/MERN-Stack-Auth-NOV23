// import User from "../models/userModels"
import User from '../models/userModels.js'
import {hash,compare} from 'bcrypt'
import jwt from 'jsonwebtoken'

const userCtrl = {
    getHome: (req,res) =>{
        res.send('getHome Ctrl')
    },
register: async(req,res) => {
    const {name,email,password} = req.body
    try {
    const user = await User.findOne({email})
    if(user) return res.json({msg: 'User already exist'})

    const hashedPass = await hash(password,10)

    const newUser = new User({
        name,
        email,
        password:hashedPass
    })

    const savedUser = await newUser.save()
    res.json({
        status: 'success',
        msg: 'Sign up success'
    })
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
},

login:async(req,res)=>{
    const {name,email,password} = req.body
    try {
    const user = await User.findOne({email})

    if(!user) return res.status(401).json({msg: 'Invalid credentials'})

    const isMatch = await compare(password, user.password)
    if(!isMatch) return res.status(401).json({msg: 'Invalid credentials or password'})

    const token = jwt.sign({id:user._id, name:user.name}, process.env.TOKEN_SECRET,{expiresIn:"1d"})

    res.cookie('token',token, {httpOnly:true})

    res.json({status:true, msg: `${user.name}, Logged In`})
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
},

verifyToken: async(req,res,next) =>{
try {
    const token = req.cookies.token

    if(!token) return res.status(401).json({ message: 'No token provided' })
    
    jwt.verify(token,process.env.TOKEN_SECRET,(err,decoded) =>{
        if(err) return res.status(401).json({ message: 'Invalid token' })
    
        req.user = decoded
        next()
    })
} catch (err) {
    return res.status(500).json({msg: err.message})
}
},

logout: async(req,res) => {
    try {
        res.cookie('token', '',{ expires: new Date(0) })
        
        res.json({msg: 'Logged out successfully'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
}
export default userCtrl