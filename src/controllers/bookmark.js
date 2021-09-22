const { bookmark, user } = require("../../models");

// Get all data bookmark from idUser
exports.getBookmarksUser = async (req, res) => {
  try {
    const bookmarksUser = await bookmark.findAll({
      where: {
        idUser: req.user.id,
      },
      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      status: "success",
      data: bookmarksUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Add bookmark from idUser
exports.addBookmark = async (req, res) => {
  try {
    const idUser = req.user.id;
    const idJourney = req.body.idJourney;

    await bookmark.create({ idUser, idJourney });

    res.status(200).send({
      status: "success",
      idUser,
      idJourney,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Delete bookmark from idUser with idJourney
exports.deleteBookmark = async (req, res) => {
  try {
    const idJourney = req.params.id;
    const idUser = req.user.id;

    await bookmark.destroy({
      where: {
        idUser,
        idJourney,
      },
    });

    res.status(200).send({
      status: "success",
      idJourney,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
