
import jwt from "jsonwebtoken"
export function VerifyAccess(passRole) {
    return (req, res, next)=> {
        const token = req.headers['auth-token']
        if (! token) {
            return res.status(404).json({ message: "No token provided!"})
        }else{
            try {
                const verifyToken = jwt.verify(token, process.env.SECRET_KEYE,{expiresIn:"2d"})
            }catch(error) {

            }
        }
    }
}