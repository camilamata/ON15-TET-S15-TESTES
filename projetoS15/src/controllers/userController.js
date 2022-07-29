const bcrypt = require("bcrypt");
const userModel = require("../models/userSchema");


const register = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;    
    try {
        const { name, email, password, age, workoutPreference } = req.body;
        const newUser = await userModel.create({name, email, password, age, workoutPreference});
        const registeredUser = await newUser.save();

        if(registeredUser) {
            res.status(201).send({
                "message": "Athlete successfully registered!",
                registeredUser
            })
        }
    } 
     catch (error) {
        console.error(error)
    }
};

const getByName = async(req, res) => {    
    try { 
        const name = req.query.name
        const foundUser = await userModel.find({name: {$regex : name, $options: 'i'}})

        if(!foundUser) {
            throw new Error ("No athletes with this name. Try again.")
        }
        
        res.status(200).json({
            "Searching for": req.query,
            "We found these athletes": foundUser
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: error.message,
            details: "Invalid search."
        });
    }
};

module.exports = {
    register,
    getByName,
    deleteById,
    
};