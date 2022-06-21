const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/user");
require("dotenv").config();
const PORT = process.env.PORT || 2000;

// Connect MongoDB
const mongoURL = process.env.MONGDB_URL;
mongoose.connect(mongoURL, (err) => {
  if (err) {
    console.log("Failed to connect to MongoDB..");
  } else {
    console.log("Succesfully, connected to MongoDB 🎉");
  }
});

// middleware
app.use(cors());
app.use(express.json());

// middlewares
app.use("/api/users", UserRoutes);


app.get("/", (req, res) => {
  res.send("This is endpoint");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT, ${PORT}`);
});
