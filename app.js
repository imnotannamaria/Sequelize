const sequelize = require('sequelize');
const config = require('./config/config');
const conexaoDB = new sequelize(config);

conexaoDB.query('SELECT * FROM PETS', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
    conexaoDB.close();
})
.catch((error) => {
    console.log(error);
});