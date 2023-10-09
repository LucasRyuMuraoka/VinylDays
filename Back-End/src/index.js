import "dotenv/config";
import cors from "cors";
import express from "express";

import { router as Router } from "./router/routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/", Router);
app.use(cors());

app.listen(PORT, () => console.log(`Server run on port ${PORT} 🚀🚀🚀`));