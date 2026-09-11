const role = (requiredRole) =>
{
    return (req, res, next) =>{
    if(!req.user)
    {
        return res.status(400).json({message:'Authentication Required'})
    }

    if(req.user.role !== requiredRole)
    {
        return res.status(404).json({message:'There is no access for users'})
    }
    next()
}
}
export default role