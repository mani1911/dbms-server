import { Sequelize } from "sequelize";
import config from "../config/index.js";
import dotenv from "dotenv";

dotenv.config({
	path: ".env",
});

const sequelize = new Sequelize(
	config.db,
	process.env.MYSQL_USER,
	process.env.MYSQL_PASSWORD,
	{
		host: "localhost",
		dialect: "mysql",
	}
);



export default sequelize;


