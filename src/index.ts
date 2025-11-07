import express from "express";
const swaggerUi = require("swagger-ui-express"); 
import {  createSwaggerDocument } from "./swagger_config.ts/swagger"; 

export const app = express();
const port = 3005;

const swaggerDocument = createSwaggerDocument(port); 


app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Inicialização do Servidor
app.listen(port, () => {
    console.log(`A API subiu na porta ${port}`)
    console.log(` Swagger em http://localhost:${port}/api-docs`)
});