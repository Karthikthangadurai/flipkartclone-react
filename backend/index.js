const express = require("express");
const cors = require("cors");
const mongoose =  require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://karthikthangaduraik_db_user:123@cluster0.b6iojfq.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(function () {
    console.log("Connected to DB");
  })
  .catch(function () {
    console.log("Failed to Connect");
  });

// const credential = mongoose.model("credential",{},"bulkmail")

app.listen(3000, function () {
  console.log("Server Started.....");
});
