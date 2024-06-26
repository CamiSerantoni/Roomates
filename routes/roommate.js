import { Router } from "express";
import { roommatesController } from "../controllers/roommates.js";

const router = Router();

router.post("/roommate", roommatesController.create);
router.get("/roommates", roommatesController.findAll);

export default router;