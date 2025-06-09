const express = require("express");
const dotenv = require("dotenv").config();

const connectDB = require("./config/connectdb");
const app = express();
// In your backend (e.g., server.js or index.js)
const cors = require("cors");
app.use(cors({
  origin: "https://playful-malabi-aa78d3.netlify.app/", // ✅ change this to actual frontend URL
  credentials: true
}));
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.listen(PORT, (err) => {
  console.log(`App is listening on port ${PORT}`);
});
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));
