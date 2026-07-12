const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./cron/resetHabits");


const app = express();
const habitRoutes = require("./routes/habitRoutes");
app.use(cors());
app.use(express.json());
app.use("/api/habits", habitRoutes);



// test route
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// connect DB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});