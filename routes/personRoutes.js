const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        console.log("data Fetch...");
        res.status(200).json(data)
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get('//:workType', async (req, res) => {

    try{
        const workType = req.params.workType;
        if(workType === 'chef' || workType === 'manager' || workType === 'waiter'){
            const response = await Person.find({work: workType})

            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({ error: 'invalid work type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Invalid Server Error" })
    }
})


router.put('/:id', async (req,res) => {
    try{
        const personID = req.params.id; //Extract the id from the URL parameter
        const updataPersonData = req.body; //Update data for the person

        const response = await Person.findByIdAndUpdate(personID, updataPersonData, {
            new: true, // Return the update documnet
            runValidators: true, //Run Mongoose Validation
        })  
        if(!response){
            return res.status(404).json({ error: 'person is not found'});
        }
        console.log('data Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const personID = req.params.id;

        const response = await Person.findByIdAndDelete(personID)
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('data deleted');
        res.status(200).json({massage: 'Person deleted Success fully'});
    }catch(err){
       console.log(err);
       res.status(500).json({ error: 'Internal Server Error'});
    }
})

module.exports = router;