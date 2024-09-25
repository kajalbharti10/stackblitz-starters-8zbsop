import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unquired: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lower: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
