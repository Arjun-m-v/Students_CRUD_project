// // // controllers/AuthController.js
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../config/db');

// const loginUser = async (req, res) => {
//     try {
//         // Query the database for a user with the provided email
//         const [data] = await db.query('SELECT * FROM students_list WHERE email = ?', [req.body.email]);

//         if (!data || data.length === 0) {
//             return res.status(404).send({
//                 success: false,
//                 message: 'Email does not exist',
//             });
//         }

//         const isMatch = await bcrypt.compare(req.body.password, data[0].password);

//         if (!isMatch) {
//             return res.status(401).send({
//                 success: false,
//                 message: 'Incorrect password',
//             });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { userId: data[0].id, email: data[0].email },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' } // token expiration
//         );

//         // Send token and user data to client
//         res.status(200).send({
//             success: true,
//             message: 'Login successful',
//             token: token,
//             data: data[0],
//         });

//     } catch (error) {
//         res.status(500).send({
//             success: false,
//             message: 'An error occurred during login',
//             error: error.message,
//         });
//     }
// };

// module.exports = { loginUser };
