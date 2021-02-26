<<<<<<< HEAD
const mongoose= require('mongoose');
const User = require('../models/User');
const connectDB = 'mongodb://127.0.0.1/FoodieNepal_test'

beforeAll(async() => {
    mongoose.connect(connectDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then((db) => {
        console.log('Connected ...');
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    })
})
//Tear down
afterAll(async() => {
    console.log('Disconnecting ...');
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
=======
const mongoose= require('mongoose');
const User = require('../models/User');
const connectDB = 'mongodb://127.0.0.1/FoodieNepal_test'

beforeAll(async() => {
    mongoose.connect(connectDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then((db) => {
        console.log('Connected ...');
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    })
})
//Tear down
afterAll(async() => {
    console.log('Disconnecting ...');
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
>>>>>>> origin/sujan
})