const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Diet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // type: DataTypes.ENUM(
        //   "Gluten Free",
        //   "Ketogenic",
        //   "Vegetarian",
        //   "Lacto-Vegetarian",
        //   "Ovo-Vegetarian",
        //   "Vegan",
        //   "Pescetarian",
        //   "Paleo",
        //   "Primal",
        //   "Low FODMAP",
        //   "Whole30"
        // ),
      },
    },
    {
      timestamps: false,
    }
  );
};
