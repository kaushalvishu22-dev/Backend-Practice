import express from "express";
import User from "./src/model/schema.js";
import DB from "./src/config/Connection.js";

const app  = express();

app.use(express.json())

DB()
  .then(() => {
    console.log("MONGO CONNECT");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/post", async (req, res) => {

    const { name, age, password } = req.body;

    const admin = await User.create({
      name,
      age,
      password,
    });

    res.status(201).json({
      message: "Data inserted successfully",
      data: admin,
    });

  
  }
);

app.get("/get", async (req, res) => {
  try {

    const find = await User.find();

    res.status(200).json({
      message: "Data fetch successfully",
      data: find,
    });

  } catch (err) {

    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("SERVER CONNECTED");
});