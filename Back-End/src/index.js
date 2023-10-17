import "dotenv/config";
import cors from "cors";
import express from "express";

import swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

import SwaggerOptions from "./config/docs/options.docs.js";

import { router as Router } from "./router/routes.js";

const options = SwaggerOptions;

const environment = swaggerJSDoc(options);

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/", Router);
app.use("/swagger/ui/docs", swaggerUi.serve, swaggerUi.setup(environment));
app.use(cors());

app.listen(PORT, () => console.log(`Server run on port ${PORT} 🚀🚀🚀`));