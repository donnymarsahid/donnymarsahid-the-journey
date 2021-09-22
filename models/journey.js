"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class journey extends Model {
    static associate(models) {
      journey.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idUser",
        },
      });
      journey.hasMany(models.bookmark, {
        as: "bookmarks",
        foreignKey: {
          name: "idJourney",
        },
      });
    }
  }
  journey.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      writer: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "journey",
    }
  );
  return journey;
};
