import express from "express";
import cors from "cors";
import path from "path";
import { productDetails, products } from "./mock_data.mjs";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  const { search } = req.query;

  if (search) {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  res.json(productDetails);
});

app.get("/mock-image.svg", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  res.sendFile(path.join(__dirname, "mock_image.png"));
});

app.listen(PORT, () => {
  console.log(`Mock server started on http://localhost:${PORT}`);
});
