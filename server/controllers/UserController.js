const bcryptjs = require('bcryptjs')
// const db = require("../config/db");
const db = require('../models/index')
const User = db.user;
const saltRounds = 10;

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;


    // Check for required fields
    if (!username || !email || !password) {
      return res.status(400).send({ success: false, message: 'Please provide all required fields.' });
    }

    // Check if a user already exists with the provided email

    const existingUser = await User.findOne({
      where: {
        email: email
      },
    });


    if (existingUser) {
      return res.status(400).send({ success: false, message: 'User with this email already exists.' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    console.log(`Hashed password: `, hashedPassword);

    const data = {
      username,
      email,
      password: hashedPassword
    }

    const details = await User.create(data);

    const userDetails = details.get({ plain: true });
    delete userDetails.password;
    delete userDetails.updatedAt;
    delete userDetails.createdAt;

    if (!details) {
      return res.status(400).send({ success: false, message: 'Error got while saving time..!' });
    }

    res.status(201).send({ success: true, message: 'User created successfully.', UserDetails: userDetails });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Error creating user.', error });
  }
};

module.exports = { createUser };
