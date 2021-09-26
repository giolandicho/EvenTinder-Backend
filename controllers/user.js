import User from "../models/user.js";

export const initializeUser = async (req,res) =>{
    const auth = req.currentUser;
    if(auth){
        const user = req.body;
        console.log(user);
        User.countDocuments({ _id: user.uid }, (error, count) =>{
            if(count>0){
                return res.status(200).send("User verified");
            }
            else{
                const newUser = new User({
                    _id: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                });
                try {
                    newUser.save();
                    return res.status(201).json(newUser)
                    } catch (error) {
                    return res.status(409).json({message: error.message})
                }
            }
        })
    }
    else{
        return res.status(403).send("Not Authorized")
    }
} 


