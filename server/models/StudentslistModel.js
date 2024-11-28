
const students=(sequelize,Sequelize)=>{
    const students= sequelize.define('students_list',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        name:{
            type:Sequelize.STRING,
        },
        standard:{
            type:Sequelize.STRING,
        },
        english:{
            type:Sequelize.INTEGER,
        },
        maths:{
            type:Sequelize.INTEGER,
        },
        science:{
            type:Sequelize.INTEGER,
        },
        hindi:{
            type:Sequelize.INTEGER,
        },
        malayalam:{
            type:Sequelize.INTEGER,
        },
    });
    return students
}

module.exports = students