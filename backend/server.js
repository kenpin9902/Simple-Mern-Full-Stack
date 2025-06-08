import express from "express";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));
