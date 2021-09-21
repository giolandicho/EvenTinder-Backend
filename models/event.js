import mongoose from "mongoose";

const Schema = mongoose.Schema;
const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true},
    date: Date,
    streetAddress: {
        type: String,
        required: false},
    city: {
        type: String,
        required: false},
    region: {
        type: String,
        required: false},
    state: {
        type: String,
        required: false},
    country: {
        type: String,
        required: true},
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"}],
});

const Event = mongoose.model("Event", eventSchema);

export default Event;