const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/user");
require("dotenv").config();
const PORT = process.env.PORT || 2000;

// middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
const mongo_URL = process.env.MONGDB_URL;
mongoose.connect(mongo_URL, (err) => {
  if (err) {
    console.log("Failed to connect to MongoDB..");
  } else {
    console.log("Succesfully, connected to MongoDB 🎉");
  }
});

app.get("/", (req, res) => {
  res.send("This is endpoint");
});

// userRoute
app.use("/api/v1/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT, ${PORT}`);
});
