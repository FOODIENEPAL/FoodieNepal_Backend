<<<<<<< HEAD
const express = require('express');
require('dotenv').config();
const restaurantRouter = require('../models/resturant');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Restaurant Route', () => {
    test('it should add a new restaurant',()=>{
        return restaurantRouter.create({    
            _id: ObjectId('6026324d4eccbc17b88a9aeb'),
            resturant_name:'KFC',
            resturant_address: 'New Baneshwor', 
            res_image: 'imageKFC.jpg'
        }).then((Response)=>{
            expect(Response.resturant_name).toBe('KFC')
            expect(Response.resturant_address).toBe('New Baneshwor')
            expect(Response.res_image).toBe('imageKFC.jpg')    
        })
    })

    test('it should retrieve the restaurant details',()=>{
        return restaurantRouter.findById({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response.resturant_name).toBe('KFC')
            expect(Response.resturant_address).toBe('New Baneshwor')
            expect(Response.res_image).toBe('imageKFC.jpg')    
        })
    })

    test('it should update the restaurant details',()=>{
        return restaurantRouter.findByIdAndUpdate({_id: ObjectId('6026324d4eccbc17b88a9aeb')},
        {
            resturant_name:'Bajeko Sekuwa',
            resturant_address: 'Putali Sadak', 
            res_image: 'imageBajekoSekuwa.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.resturant_name).toBe('Bajeko Sekuwa')
            expect(Response.resturant_address).toBe('Putali Sadak')
            expect(Response.res_image).toBe('imageBajekoSekuwa.jpg')    
        })
    })

    test('it should retrieve the restaurant',()=>{
        return restaurantRouter.findByIdAndDelete({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
        })
    })
=======
const express = require('express');
require('dotenv').config();
const restaurantRouter = require('../models/resturant');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Restaurant Route', () => {
    test('it should add a new restuarant',()=>{
        return restaurantRouter.create({    
            _id: ObjectId('6026324d4eccbc17b88a9aeb'),
            resturant_name:'KFC',
            resturant_address: 'New Baneshwor', 
            res_image: 'imageKFC.jpg'
        }).then((Response)=>{
            expect(Response.resturant_name).toBe('KFC')
            expect(Response.resturant_address).toBe('New Baneshwor')
            expect(Response.res_image).toBe('imageKFC.jpg')    
        })
    })

    test('it should retrieve the restuarant details',()=>{
        return restaurantRouter.findById({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response.resturant_name).toBe('KFC')
            expect(Response.resturant_address).toBe('New Baneshwor')
            expect(Response.res_image).toBe('imageKFC.jpg')    
        })
    })

    test('it should update the restuarant details',()=>{
        return restaurantRouter.findByIdAndUpdate({_id: ObjectId('6026324d4eccbc17b88a9aeb')},
        {
            resturant_name:'Bajeko Sekuwa',
            resturant_address: 'Putali Sadak', 
            res_image: 'imageBajekoSekuwa.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.resturant_name).toBe('Bajeko Sekuwa')
            expect(Response.resturant_address).toBe('Putali Sadak')
            expect(Response.res_image).toBe('imageBajekoSekuwa.jpg')    
        })
    })

    test('it should retrieve the restuarant',()=>{
        return restaurantRouter.findByIdAndDelete({_id: ObjectId('6026324d4eccbc17b88a9aeb')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
        })
    })
>>>>>>> origin/sujan
})