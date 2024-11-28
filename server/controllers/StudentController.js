const { where } = require('sequelize');
const db = require('../models/index')
const Students_List = db.students_list;
const { Op } = require('sequelize');

const getStudents = async (req, res) => {
    try {
        const data = await Students_List.findAll();
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No Records Found'
            })
        }
        res.status(200).send({
            success: true,
            message: 'All Students Records',
            totalStudents: data.length,
            data: data,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get all Student API',
            error
        })

    }
};

const getStudentByID = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid or Provide Student Id'
            })
        }
        const data = await Students_List.findByPk(studentId);
        // db.query(`SELECT * FROM students_list WHERE id=` + studentId)
        // const data=await db.query(`SELECT * FROM students_list WHERE id=?`,[studentId])
        
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No Records Found'
            })
        }
        res.status(200).send({
            success: true,
            studentDetails: data,
            
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get student by id API',
            error
        })
    }
}

const createStudent = async (req, res) => {
    try {
        const { name, standard, english, maths, science, hindi, malayalam } = req.body
        if (!name || !standard || !english || !maths || !science || !hindi || !malayalam) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide all fields'
            })
        }


        const datas = {
            name,
            standard,
            english,
            maths,science,
            hindi,
            malayalam
          }

        const data = await Students_List.create(datas);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'ERROR IN INSERT QUERY'
            })
        }
        res.status(201).send({
            success: true,
            message: 'New Student Record Created',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Create Student API',
            error
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid Id or Provide Id'
            })


            // await User.update(
            //     { lastName: 'Doe' },
            //     {
            //       where: {
            //         lastName: null,
            //       },
            //     },
            //   );
            
        }
        const { name, standard, english, maths, science, hindi, malayalam } = req.body
        const data = await Students_List.update(
            { name, standard, english, maths, science, hindi, malayalam},
            {
                where:{
                    id:studentId
                }
            }
        )
        if (!data) {
            return res.status(500).send({
                success: false,
                message: 'Error In Update Data',
            })
        }
        res.status(200).send({
            success: true,
            message: 'Students Details Updated'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In update Student API',
            error
        })
    }
}


const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: 'Please Provide Valid Student Id'
            })
        }
        await Students_List.destroy({
            where:{
                id:studentId
                }
            }
        )
        // db.query(`DELETE FROM students_list WHERE id=?`, [studentId])

        // const { Op } = require('sequelize');
        // Post.destroy({
        //   where: {
        //     authorId: {
        //       [Op.or]: [12, 13],
        //     },
        //   },
        // });

        res.status(200).send({
            success: true,
            message: 'Student Deleted Successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Delete Student API',
            error,
        })

    }
}




const searchStudents = async (req, res) => {
    try {
        const searchTerm = req.query.search;
        if (!searchTerm) {
            return res.status(400).send({ success: false, message: "No search term provided" });
        }
        const data = await Students_List.findAll({
            where: {
                name: {
                    [Op.like]: `%${searchTerm}%`,
                }
            }
        })
        
        if (data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No matching students found'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Search Results',
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in search API',
            error
        });
    }
};




module.exports = { getStudents, getStudentByID, createStudent, updateStudent, deleteStudent, searchStudents }