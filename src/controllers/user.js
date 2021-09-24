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
    console.log(error);
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
      order: [["createdAt", "DESC"]],
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
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const idUser = req.user.id;
    const path = process.env.IMG_URL;
    const imageUpload = path + req.file.filename;

    await user.update(
      { ...req.body, image: imageUpload },
      {
        where: {
          id: idUser,
        },
      }
    );

    res.status(200).send({
      status: "success",
      data: imageUpload,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Get data all user
exports.getDataUsers = async (req, res) => {
  try {
    const dataUsers = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      status: "success",
      data: dataUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
