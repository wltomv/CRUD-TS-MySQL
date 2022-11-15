import { Sequelize } from 'sequelize'

const { DATABASE, USER_DB, PASSWORD_DB, HOST } = process.env


const sequelize = new Sequelize(DATABASE || '', USER_DB || '', PASSWORD_DB, {
    host: HOST,
    dialect: 'mysql',
});

export default sequelize;