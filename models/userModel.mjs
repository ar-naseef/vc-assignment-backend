import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    fname: String,
    lname: String,
    number: Number,
})

export default mongoose.model("User", userSchema);