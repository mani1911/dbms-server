import sequelize from "../utils/connectSqlDb.js";
import { Sequelize, DataTypes} from "sequelize";

const Comment = sequelize.define("comment", {
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  movie_id: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'comment',
  freezeTableName:true
});

export default Comment;