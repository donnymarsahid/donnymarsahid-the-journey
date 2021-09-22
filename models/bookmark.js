"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookmark extends Model {
    static associate(models) {
      bookmark.belongsTo(models.journey, {
        as: "journey",
        foreignKey: {
          name: "idJourney",
        },
      });
      bookmark.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idUser",
        },
      });
    }
  }
  bookmark.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      idJourney: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bookmark",
    }
  );
  return bookmark;
};
