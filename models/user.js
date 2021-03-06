import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: String,
    displayName: {
        type: String,
        required: true,
        maxLength: 100},
    email:{
        type: String,
        required: true,
        unique: true
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }],
    photoURL: {
        type: String,
        maxLength: 150,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    matches: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],


});

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model("User", userSchema);

export default User;
