import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { getProductById } from "../utils/product.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categoriesPath = path.join(__dirname, "categories.json");

let categories;
try {
  const categoriesData = fs.readFileSync(categoriesPath);
  categories = JSON.parse(categoriesData);
} catch (err) {
  console.error(`Failed to read categories file: ${err}`);
  categories = [];
}

// Alla kategorier
app.get("/api/categories", (req, res) => {
  res.json(categories);
});

// specifik kategori
app.get("/api/categories/:id", (req, res) => {
  const categoryId = Number(req.params.id);
  const result = getProductById(categoryId, categories);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send(`Category with ID ${categoryId} not found`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
