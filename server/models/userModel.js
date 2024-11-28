
const user = (sequelize,Sequelize)=>{
    const user = sequelize.define('users',
        {
            id:{
                type:Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement:true,
            },
            username:{
                type:Sequelize.STRING,
            },
            email:{
                type:Sequelize.STRING,
            },
            password:{
                type:Sequelize.STRING,
            }

        }
    );
        return user
}

module.exports = user