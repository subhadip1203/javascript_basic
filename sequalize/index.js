const sequelize = require("./database/config");
const User = require('./database/model_user')


async function runDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("DB sync is successfull");
    
    const subhadip = await User.create({ 
        name: 'subhadip2',
        email: 'subhadip1203edu2@gmail.com',
        socialMedia: 'microsoft',
        password: '12345' 
    });
    console.log(subhadip.toJSON()); 

  } catch (error) {
    console.error("Unable to connect to the database:");
  }
}

runDB();
