const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("diets", {
        name: {
            type: DataTypes.ENUM("Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
    );
};