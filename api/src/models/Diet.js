const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "diet",
    {
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
