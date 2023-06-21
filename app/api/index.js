import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your other server logic goes here

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
