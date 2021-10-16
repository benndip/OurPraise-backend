const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

router.post('/register', async (req, res) => {

    const { name, email, phone, password } = req.body

    const { error } = registerValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    const emailExists = User.findOne({ email })
    if (emailExists) {
        return res.status(400).send("This email already exists")
    }

    const salt = await bcrypt.getSalt(10)
    const hashedPassword = bcrypt.hash(password, salt)

    const user = new User({
        name,
        email,
        phone,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.status(200).json({ user: savedUser });
    } catch (error) {
        throw new (err);
    }
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body

    const { error } = registerValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    const user = await User.findOne({ email })
    const validPass = bcrypt.compare(password, user.password)
    if (!emailExists) {
        return res.status(400).send("Email or Password is wrong!")
    }
    if (!validPass) {
        return res.status(400).send("Password is invalid")
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    return res.header('auth-token',token).send(token)
});

module.exports = router