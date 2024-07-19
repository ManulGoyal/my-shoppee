// server.js
import cors from "cors";
import express from "express";
import products from "./products.js";

const app = express();
const PORT = 5000; // or any port you prefer

app.use(cors());

// Endpoint to get all products
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
