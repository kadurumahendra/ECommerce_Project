import mongoose from 'mongoose';
import User from"../models/User.js"


export const getAllUsers = async(req, res) =>
{
    try
    {
        const users = await User.find().select("-password");
        if(!users)
        {
            return res.status(404).json({message:"No users Found"})
        }
        return res.status(200).json(users)

    }
    catch(error)
    {
        return res.status(500).json({message:"Unable to get the users", error: error.message})

    }
}


export const getUserById = async(req, res) =>
{
    try
    {
        if(!mongoose.isValidObjectId(req.params.id))
        {
            return res.status(400).json({message:'Invalid user id'})
        }
        const user = await User.findById(req.params.id).select("-password");
        if(!user)
        {
            return res.status(404).json({message:"User not found"})
        }
        return res.status(200).json(user)

    }
    catch(error)
    {
        return res.status(500).json({message:"unable to get the user by id", error: error.message})

    }
}


export const updateUser = async(req, res) =>
{
    try
{

    const {username, email, password, role} = req.body
    if(!mongoose.isValidObjectId(req.params.id))
        {
            return res.status(400).json({message:'invalid user id'})
        }

         if (username) {
            user.username = username;
        }

        if (email) {
            user.email = email;
        }

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        if (role) {
            user.role = role;
        }
         await user.save();

        const updatedUser = user.toObject();
        delete updatedUser.password;

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });



    }
    catch(error)
    {
        return res.status(500).json({message:"Unable to update the user", error: error.message})
    }


}


export const deletedUser = async(req, res) =>
{
    try
    {
        if(!mongoose.isValidObjectId(req.params.id))
        {
            return res.status(400).json({message:'invalid user id'})
        }
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user)
        {
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User deleted successfully", user})

    }
    catch(error)
    {
        return res.status(500).json({message:"Unable to delete the user", error: error.message})
    }
}

    





