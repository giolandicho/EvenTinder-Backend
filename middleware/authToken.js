import admin from 'firebase-admin';
import { serviceAccount } from "./serviceAccount.js"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const verifyToken = async(req, res, next)=>{
    const header = req.headers?.authorization;
    if(header !== "Bearer null" && req.headers?.authorization?.startsWith('Bearer ')){
        const idToken = req.headers.authorization.split("Bearer ")[1];
        try{
            const verifiedToken = await admin.auth().verifyIdToken(idToken);
            req["currentUser"] = verifiedToken;
        }catch(error){
            console.log(error.message)
        }
    }
    next();
}

export default verifyToken;