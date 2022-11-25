import {Sequelize} from "sequelize";


const sequelize = new Sequelize('sql9580728', 'sql9580728', 'UtZLaCJXKp', {
    host: 'sql9.freesqldatabase.com',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default sequelize;