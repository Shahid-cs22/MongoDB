import express from "express";
import { getCounter, resetCounter } from "../controller/controller.js";

const router = express.Router();

router.get("/", getCounter);
router.post("/reset", resetCounter);

export default router;
