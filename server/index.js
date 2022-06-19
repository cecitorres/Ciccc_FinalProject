const express = require("express");
const app = express();
const cors = require("cors");
const UserRoutes = require("./routes/user");
const PORT = process.env.PORT || 2000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is endpoint");
});

// userRoute
app.use("/api/v1/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT, ${PORT}`);
})