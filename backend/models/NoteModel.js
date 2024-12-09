import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Note = db.define('notes',{
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName:true
});

export default Note;

(async()=>{
    await db.sync({ alter: true });
    console.log("Database synced")
})();