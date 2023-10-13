import { Sequelize } from "sequelize";

const connectSqlDatabase = async (database) => {
    try{
        const sequelize = new Sequelize(
            database,
            process.env.SQL_DB_USERNAME,
            process.env.SQL_DB_PASSWORD,
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        );

        await sequelize.authenticate();
        console.log('SQL Database Connected Successfully');
    }
    catch (error){
        console.log(error);
        process.exit(1)
    }
};

export default connectSqlDatabase;