import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";
import { initializeCount } from "./controller/controller.js";

const app = express();
const PORT = 5000;

app.use(express.json());

await connectDB();
await initializeCount();

app.use("/api/counter", router);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
