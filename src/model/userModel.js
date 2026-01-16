import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: [true, 'Names are required'],
      trim: true
    },

    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: [true, 'Please provide your password']
    },

    role: {
      type: String,
      enum: ['user', 'provider', 'admin'],
      default: 'user'
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
