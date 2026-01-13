import mongoose from "mongoose";


const userSchema =new mongoose.Schema({
    names: {
        type: String,
        required: [true, 'Names are required']
    },

    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Please provide your password'],
    },

    role: {
        type: String,
        enum: ['user', 'provider', 'admin'],
        default: 'default'
    },
    
createdAt: {
    type: Date,
    default: new Date.now(Date.now())
}
})

const User = mongoose.model('User' , userSchema);
export default User;