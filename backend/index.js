const express = require("express");
const connectDB = require("./config/connectdb");
const dotenv = require("dotenv").config();
const app = express();
// In your backend (e.g., server.js or index.js)
const cors = require("cors");
app.use(cors());
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.listen(PORT, (err) => {
  console.log(`App is listening on port ${PORT}`);
});
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));
