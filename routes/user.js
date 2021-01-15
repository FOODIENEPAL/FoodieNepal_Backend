const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const auth = require('../auth');


router.get('/',(req,res,next)=> {
    User.find({})
    .then((user)=>{
        status=200;
        res.json(user);

    })
    .catch((err)=>next(err));

})

router.post('/signup', (req, res, next) => {
    let password = req.body.password;
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            let err =  new Error('Could not hash!');
            err.status = 500;
            return next(err);
        }
        User.findOne({email:req.body.email})
            .then((user)=>{
                if(user==null){
                    User.create({
                        fullname:req.body.fullname,
                        email:req.body.email,
                        password:hash,
                        admin:false
                    }).then((user) => {
                        let token = jwt.sign({_id:user._id}, process.env.SECRET);
                        res.json({ status: "success", token: token });
                    }).catch(next);
                }
                else{
                    res.json({status:"exists"});
                }
            }).catch(next);
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user==null) {
                res.json({status:'401'})
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then((isMatch) => {
                        if (!isMatch) {
                            res.json({status:'401'})
                        }
                        let token = jwt.sign({ _id: user._id,admin:user.admin }, process.env.SECRET);
                        res.json({ status: 'success', token: token, role: user.role, email: user.email });
                    }).catch(next);
            }
        }).catch(next);
})

router.get('/viewUser', (req, res, next) => {
    User.find({role:'customer'})
    .then((user)=>{
        status=200;
        res.json(user);

    })
    .catch((err)=>next(err));
})

router.get('/me', auth.verifyUser, (req, res, next) => {
   res.json({ _id: req.user._id, name: req.user.name, phone: req.user.phone, email:req.user.email, username: req.user.username, profileimage: req.user.profileimage,admin:req.user.admin });
   
});

router.put('/me', auth.verifyUser, (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { $set: req.body }, { new: true })
        .then((user) => {
            res.json({ _id: user._id, firstName: req.user.firstName, lastName: req.user.lastName, username: user.username, image: user.image });
        }).catch(next);
});



module.exports = router;