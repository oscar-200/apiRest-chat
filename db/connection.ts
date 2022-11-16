import {Sequelize} from "sequelize";


const sequelize = new Sequelize('apirest-chat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default sequelize;