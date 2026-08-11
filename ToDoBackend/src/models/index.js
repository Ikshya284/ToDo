import {TodoItem} from "./todoModel.js";
import User from "./User.js";

User.hasMany(TodoItem, { foreignKey: "userId" });
TodoItem.belongsTo(User, { foreignKey: "userId" });

export { TodoItem, User };