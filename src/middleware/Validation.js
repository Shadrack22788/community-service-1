import User from "../model/userModel.js"

export const EmailExist = async (req, res, next) => {
  try {
    const { email } = req.body

    const user = await User.findOne({email})
    if (user) {
      return res.status(403).json({ message: "User already exist" })
    } else {
      return next()
    }
    }
    catch(error){

      console.log(error)
      return res.status(500).json({message:"creation failed"})

    }
  }

