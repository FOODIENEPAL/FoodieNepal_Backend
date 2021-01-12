const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/uploads');
const resturantRouter = require('./routes/resturant');
const app = express();
const auth = require('./auth');
const cors = require('cors');
const dotenv = require("dotenv").config();
const foodCat = require('./routes/foodCategory');
const food = require('./routes/food');


   
  //Connecting with Mongodb serve
  mongoose.connect(process.env.URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }).then((db)=>{
      console.log("Succesfully connected to mongodb server");
  },(err)=>console.log(err));

  app.use(express.static(__dirname + "/public"));
  app.options('*', cors());
  app.use(cors());
  app.use(morgan('tiny'));
  app.use(express.json());


  app.use('/users',userRouter);
  app.use('/upload',uploadRouter);
  app.use('/resturants',resturantRouter);
  app.use('/foodCat',foodCat);
  app.use('/foods', food);



  // app.use(auth.verifyUser);


  //Listening to Port

  app.listen(process.env.PORT, ()=>{
    console.log(`App is running at localhost:${process.env.PORT}`);
});