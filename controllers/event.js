import Event from "../models/event.js";
import User from "../models/user.js";

export const addEvent = async(req, res)=>{
    const event = req.body;
    const user = await User.findById(event.user.uid).exec();
    Event.countDocuments({ 
        eventName: event.eventName,
        date: event.date,
     }, (error, count) =>{
         if(count > 0){
             Event.users.push(user);
         }else{
            const newEvent = new Event({
                eventName: event.eventName,
                date: event.date,
                streetAddress: event.streetAddress,
                city: event.city,
                state: event.state,
                country: event.country,
                users: [event.user],
            })
            try {
                newEvent.save();
                return res.status(201).json(newEvent);
            } catch (error) {
                res.status(409).json({message: error.message});
            }
         }
     })
}
