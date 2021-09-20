import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";
import verifyToken from "./middleware/authToken.js";


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(verifyToken);
app.use(cors());

app.use("/user", userRoutes);

const CONNECTION_URL = "mongodb+srv://SeriousPimp209:WVUgBjYp4jiFDtcN@cluster0.pxtdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set("useFindAndModify", false);
