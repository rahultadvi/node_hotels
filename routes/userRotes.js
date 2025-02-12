const express = require("express");
const router = express.Router();
const UserPerson = require('../models/userschema'); 
const userItem = require('../models/userschema');

router.post('/', async (req, res) => {
    try{
        const data = req.body;

        const newUser = new UserPerson(data);
        const userRespone = await newUser.save();
        console.log("Fatch Data....");
        res.status(200).json(userRespone)

    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = router;