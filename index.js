const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/uploads');
const resturantRouter = require('./routes/resturant');
const url = 'mongodb://localhost:27017/FoodieNepal'
const PORT = 3002;
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
  app.use('/upload',uploadRouter);
  app.use('/resturants',resturantRouter);


  app.use(auth.verifyUser);


  //Listening to Port

  app.listen(PORT,()=>{
    console.log(`App is running at localhost:${PORT}`);
});