const express = require('express')
const { getStudents, getStudentByID, createStudent, updateStudent, deleteStudent, searchStudents } = require('../controllers/StudentController')
const authenticateJWT = require('../middleware/authMiddleware');


const router = express.Router();

// router.use(authenticateJWT);

router.get('/getall', authenticateJWT, getStudents)

// GET STUDENT BY ID
router.get('/get/:id',authenticateJWT, getStudentByID);

// CREATE STUDENT ||POST
router.post('/create', authenticateJWT,createStudent)

// UPDATE STUDENT|| PUT
router.put('/update/:id',authenticateJWT, updateStudent)

// DELETE STUDENT|| DELETE
router.delete('/delete/:id', authenticateJWT,deleteStudent)

// Search Student
router.get('/search', authenticateJWT,searchStudents);

module.exports = router;


