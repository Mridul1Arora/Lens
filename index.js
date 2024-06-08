const express = require('express');
const app = express();
const PORT = 8000;
const userController = require("./userController");

swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs',swaggerUi.serve , swaggerUi.setup(swaggerDocument));

app.listen(PORT,()=>console.log("Server started"));
