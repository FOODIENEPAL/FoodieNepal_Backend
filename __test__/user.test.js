<<<<<<< HEAD
const express = require('express');
require('dotenv').config();
const mongoose= require('mongoose');
const userRouter = require('../models/User');

// Setup
require('./setup');

describe('Test of User Route', () => {
    test('it should add a new user',()=>{
        return userRouter.create({    
            fullname:'Amit Pradhan',
            email: 'amitpradhan195@gmail.com', 
            password: '12345'
        }).then((Response)=>{
            expect(Response.fullname).toBe('Amit Pradhan')
            expect(Response.email).toBe('amitpradhan195@gmail.com')
            expect(Response.password).toBe('12345')    
        })
    })

    test('it should retrieve the user details',()=>{
        return userRouter.findOne({email:'amitpradhan195@gmail.com'})
        .then((Response)=>{
            expect(Response.email).toBe('amitpradhan195@gmail.com')
            expect(Response.password).toBe('12345')    
        })
    })

    test('it should update the user details',()=>{
        return userRouter.findOneAndUpdate({email:'amitpradhan195@gmail.com'}, {fullname:'LEON', password:'1234'}, {new: true})
        .then((updateduser)=>{
            expect(updateduser.fullname).toBe('LEON')
            expect(updateduser.email).toBe('amitpradhan195@gmail.com')
            expect(updateduser.password).toBe('1234')          
        })
    })

    test('it should delete the user',()=>{
        return userRouter.findOneAndDelete({email:'amitpradhan195@gmail.com'})
        .then((Response)=>{
            expect(Response.email).toBe('amitpradhan195@gmail.com')
        })
    })
=======
const express = require('express');
require('dotenv').config();
const mongoose= require('mongoose');
const userRouter = require('../models/User');

// Setup
require('./setup');

describe('Test of User Route', () => {
    test('it should add a new user',()=>{
        return userRouter.create({    
            fullname:'Amit Pradhan',
            email: 'amitpradhan195@gmail.com', 
            password: '12345'
        }).then((Response)=>{
            expect(Response.fullname).toBe('Amit Pradhan')
            expect(Response.email).toBe('amitpradhan195@gmail.com')
            expect(Response.password).toBe('12345')    
        })
    })

    test('it should retrieve the user details',()=>{
        return userRouter.findOne({email:'amitpradhan195@gmail.com'})
        .then((Response)=>{
            expect(Response.email).toBe('amitpradhan195@gmail.com')
            expect(Response.password).toBe('12345')    
        })
    })

    test('it should update the user details',()=>{
        return userRouter.findOneAndUpdate({email:'amitpradhan195@gmail.com'}, {fullname:'LEON', password:'1234'}, {new: true})
        .then((updateduser)=>{
            expect(updateduser.fullname).toBe('LEON')
            expect(updateduser.email).toBe('amitpradhan195@gmail.com')
            expect(updateduser.password).toBe('1234')          
        })
    })

    test('it should delete the user',()=>{
        return userRouter.findOneAndDelete({email:'amitpradhan195@gmail.com'})
        .then((Response)=>{
            expect(Response.email).toBe('amitpradhan195@gmail.com')
        })
    })
>>>>>>> origin/sujan
})