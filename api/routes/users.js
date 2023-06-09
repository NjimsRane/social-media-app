import express from "express";
import { GetUser } from "../controllers/user.js";


const router = express.Router();

router.get('/test/:userId', GetUser);


export default router;