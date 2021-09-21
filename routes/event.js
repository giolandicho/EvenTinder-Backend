import express from "express";
import { addEvent } from "../controllers/event.js";

const eventRoutes = express.Router();

eventRoutes.post("/add", addEvent);

export default eventRoutes;