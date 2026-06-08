import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "server is healthy! GitHub actions are working!",
    status: "Github actions with Docker 🐳",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
