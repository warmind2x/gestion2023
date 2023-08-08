const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
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
            userId: req.query.userId,
            password: req.query.password
        };

        let user = await User.findOne({where:{userId: logUser.userId}});
        console.log(user.dataValues)
        if (!user) {
            const response = {
                status: "User does´t exist"
            };
            return res.status(401).json(response);



        } else {
            const toSend = user.dataValues;
            if (bcrypt.compareSync(logUser.password,user.dataValues.password)) {

                console.log(user.dataValues.nombre);
                return res.status(200).json(toSend)
            };

        }
    } catch (error) {
        console.error(error.errors[0]);
        res.status(404).json(error.errors[0].message);
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