import sequelize from "../utils/connectSqlDb.js";
import { Sequelize, DataTypes} from "sequelize";

const Movie = sequelize.define("movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maturity: {
      type: DataTypes.STRING,
      allowNull: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: true
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true
  }

}, {
  tableName: 'movie',
  freezeTableName:true
});

export default Movie;