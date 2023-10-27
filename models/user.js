import sequelize from "../utils/connectSqlDb.js";
import { Sequelize, DataTypes} from "sequelize";

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
      type: DataTypes.STRING
  }
}, {
  tableName: 'user',
  freezeTableName:true
});

export default User;