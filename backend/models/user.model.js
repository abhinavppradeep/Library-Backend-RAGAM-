import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  membership_type: {
    type: String,
    enum: ["Regular", "Premium"],
    default: "Regular",
  },
  registered_date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
