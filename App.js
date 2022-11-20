const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());


const mongoUrl =
  "mongodb+srv://sahithi:<password>@cluster0.yhfksck.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  const User=mongoose.model("UserInfo");
  app.post("/register", async (req, res) => {
  const { name,bio } = req.body;
 try{
  await User.create({
    name,
    bio,
  });
  res.send({ status: "ok" });
} catch (error) {}
  res.send({ status: "error" });
});

app.listen(5000, () => {
  console.log("Server Started");
});