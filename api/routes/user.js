const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');


const {User} = require('../models')

//POST -> req.body
//GET -> req.query

//******************
//**** A P I *******
//******************

//Create User
router.post("/register", async (req, res) =>{
    try {
      console.log(req.body)
        const newUser = {
            _nombre: req.body._nombre,
            _email:req.body._email,
            _password: bcrypt.hashSync(req.body._password, 10),
            _userId: req.body._userId            
        };
        console.log(newUser);
        const user = await User.create(newUser);
        console.log(user);

        const response = {
            status: "success"
        };

        res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(404).json(error);
    }
});

router.post("/login", async (req, res) =>{
    try {
        console.log(req.body)
        const logUser = {
            userId: req.body.userId,
            password: req.body.password
        };

        let user = await User.findOne({where:{_userId: logUser.userId}});
        if (!user) {
            const response = {
                status: "User does´t exist"
            };
            return res.status(401).json(response);



        } else {
            
            if (bcrypt.compareSync(logUser.password,user.dataValues._password)) {
                user.set("_password", undefined,{strict:false});
                const token = jwt.sign({
                    userData: user
                }, "securepassword",{expiresIn: 60*60})

                const response = {
                    status:'success',
                    token: token,
                    userData: user
                }
                return res.status(200).json(response)
            };

        }
    } catch (error) {
        console.error(error);
        res.status(404).json(error);
    }
})

router.get("/getUser", async (req, res) =>{
  try {
      console.log(req.query)
      const user = await User.findAll()

      return res.status(200).json(user)




  } catch (error) {
      console.error(error);
      res.status(404).json(error);
  }
})

module.exports = router;