import jwt from "jsonwebtoken"
import User from "../models/User.js"

const authentication = async(req, res, next) =>
{
    try{
        const authHeader = req.headers.authorization

        if(!authHeader)
        {
            return res.status(400).json({message:"no token provided"})
        }

        const token = authHeader.split(" ")[1]
        if(!token)
        {
            return res.status(400).json({message:'Invalid authorization format'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.userId).select("-password")
        if(!user)
        {
            return res.status(404).json({message:'User not found'})
        }
        req.user = user
        next()

    }
    catch(error)
    {
        return res.status(500).json({message:'Invalid token'})
    }
    
}
export default authentication