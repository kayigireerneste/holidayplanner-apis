import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mainRouter from "./src/routes/index.js";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import { badroutes, duringprocess, errosingeneral } from "./src/middleware/index.js";

dotenv.config();
const app = express();

const swaggerDocument = yaml.load("./yamlfile.yaml");
app.use("/api_docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(cors());
app.use(bodyParser.json());
app.use("/", mainRouter);
app.get("/", (req, res) => {
  res.json({ message: 'Welcome to Holiday Planners' });
});
app.all('*',badroutes)
app.use(errosingeneral);

mongoose.connect(process.env.DB_CONNECTION_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  
});
