// index.ts

import express from "express";
import swaggerUi from "swagger-ui-express";
import { createSwaggerDocument } from "./swagger_config/swagger";
import cors from "cors";

export const app = express(); 

const port = process.env.PORT || 3005;
const swaggerDocument = createSwaggerDocument(Number(port));

app.use(cors());
app.use(express.json());

import './endpoints'; 

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`A API subiu na porta ${port}`);
    console.log(`Swagger em http://localhost:${port}/api-docs`);
});