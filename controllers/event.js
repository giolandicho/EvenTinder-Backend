import Event from "../models/event.js";

export const addEvent = async(req, res)=>{
    const event = req.body;
    const newEvent = new Event(event)
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


