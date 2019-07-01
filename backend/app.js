const express = require("express");
const bodyParser = require("body-parser");
const Plant = require("./models/plant");
const Feedback = require("./models/feedback");
const Order = require("./models/order");
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
//user login
app.post("/api/user/login",(req,res,next) => {
  console.log("This is login route")
  console.log(req.body);

    let fetchedUser;
    User.findOne({username:req.body.username,role:req.body.role})
     .then(user=>{
      if(!user)
      {
         console.log("User not found");
          return res.status(401).json({
          message: "Authentication Failed"
        });
      }
      fetchedUser=user;
      if(user.password==req.body.password)
      {
        const token=jwt.sign({username: user.username,role:user.role,userId:user._id},"This is the secret text");
        console.log("Password Matches");
        console.log(user);
        res.status(200).json({
          token:token,
          username: user.username,
          role:user.role,
          userID:user.id
        });
      }
      else
      {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
     })
     .catch(err => {

    })


    res.status(200);
});

//adding new plants
app.post("/api/plants", (req, res, next) => {
  const plant = new Plant({
    pname: req.body.pname,
    pcategory: req.body.pcategory,
    pdescription: req.body.pdescription,
    punitPrice: req.body.punitPrice,
    pstock: req.body.pstock
    //pimage: req.body.pimage
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
  Plant.findOne({ _id: req.params.id }).then(document => {
    res.status(200).json({
      message: "Plant fetched successfully",
      plant: document
    });
  });
});
//PlantOrder request handling
app.get("/api/orders", (req, res, next) => {
  Order.find().then(documents => {
    res.status(200).json({
      message: "Orders fetched successfuly",
      orders: documents
    });
  });
});
app.post("/api/orders", (req, res, next) => {
  const order = new Order({
    orderDate: req.body.orderDate,
    oissueDate: req.body.oissueDate,
    oPlants: req.body.oPlants,
    ototAmount: req.body.ototAmount,
    ototDiscount: req.body.ototDiscount,
    oCustomerId: req.body.oCustomerId
  });
  order.save();
  res.status(201).json({
    message: "Order added successfuly"
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
app.get("/api/feedbacks", (req, res, next) => {
  Feedback.find().then(documents => {
    res.status(200).json({
      message: "Feedbacks fetched successfuly",
      feedbacks: documents
    });
  });
});

/*app.delete("/api/plants/:id", (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({ message: "plant deleted successfuly" });
});
*/

module.exports = app;
