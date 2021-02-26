<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/uploads');
const resturantRouter = require('./routes/resturant');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
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

  app.use(auth.verifyUser);
  app.use('/cart',cartRouter);
  app.use('/order',orderRouter);

  //Listening to Port

  app.listen(process.env.PORT, ()=>{
    console.log(`App is running at localhost:${process.env.PORT}`);
=======
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const userRouter = require('./routes/User');
const adminRouter = require('./routes/Admin');
const foodRouter = require('./routes/Food');
const uploadRouter = require('./routes/Uploads');
const resturantRouter = require('./routes/Resturant');
const dotenv = require('dotenv').config();


const url = 'mongodb://localhost:27017/FS'
const PORT = 3001;
const app = express();
const auth = require('./auth');
const cors = require('cors');

   
  //Connecting with Mongodb serve
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then((db)=>{
      console.log("Succesfully connected to mongodb server");
  },(err)=>console.log(err));

  app.use(express.static(__dirname + "/public"));
  app.options('*', cors());
  app.use(cors());
  app.use(morgan('tiny'));
  app.use(express.json());


  app.use('/users',userRouter);

 
  app.use(auth.verifyUser);


  //Listening to Port

  app.listen(PORT,()=>{
    console.log(`App is running at localhost:${PORT}`);
>>>>>>> origin/sujan
});