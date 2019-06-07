const express = require("express");
const bodyParser = require("body-parser");
const Plant = require("./models/plant");
const Feedback = require("./models/feedback");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/plant_nursery_management_system", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/plants", (req, res, next) => {
  const plant = new Plant({
    pname: req.body.pname,
    pcategory: req.body.pcategory,
    pdescription: req.body.pdescription,
    punitPrice: req.body.punitPrice
  });
  plant.save();
  res.status(201).json({
    message: "Plant added successfully"
  });
});

app.get("/api/plants", (req, res, next) => {
  Plant.find().then(documents => {
    res.status(200).json({
      message: "Plants fetched successfuly",
      plants: documents
    });
  });
});

app.get("/api/plants/:id", (req, res, next) => {
  Plant.findOne({_id:req.params.id}).then(document => {
    res.status(200).json({
      message: "Plant fetched successfully",
      plant: document
    });
  });
});
//Feedback request handling
app.post("/api/feedbacks", (req, res, next) => {
  const feedback = new Feedback({
    fcfname: req.body.fcfname,
    fclname: req.body.fclname,
    fdate: req.body.fdate,
    fperspective: req.body.fperspective,
    ftype: req.body.ftype,
    fpcategory: req.body.fpcategory,
    fmessage: req.body.fmessage
  });
  feedback.save();
  res.status(201).json({
    message: "Feedback added successfully"
  });
});

/*app.delete("/api/plants/:id", (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({ message: "plant deleted successfuly" });
});
*/

module.exports = app;
