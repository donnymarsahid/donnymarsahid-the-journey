const { user, journey } = require("../../models");

// Get detail profile user
exports.getUser = async (req, res) => {
  try {
    const userProfile = await user.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    res.status(200).send({
      status: "success",
      data: userProfile,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Get data journey from user profile
exports.getJourneysUser = async (req, res) => {
  try {
    const idUser = req.user.id;
    const findJourneys = await journey.findAll({
      where: {
        idUser,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    res.status(200).send({
      status: "success",
      data: findJourneys,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
