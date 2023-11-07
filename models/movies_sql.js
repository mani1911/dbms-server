import sequelize from "../utils/connectSqlDb.js";
import { Sequelize, DataTypes} from "sequelize";

const Movie = sequelize.define("movie", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_date: {
      type: DataTypes.DATE,
      allowNull: true,
  },
  rating: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  total_collection : {
    type: DataTypes.BIGINT,
    allowNull: true
  }

}, {
  tableName: 'movie',
  freezeTableName:true
});

export default Movie;