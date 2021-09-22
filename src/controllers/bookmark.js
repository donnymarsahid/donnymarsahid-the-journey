const { bookmark, user } = require("../../models");

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
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.addBookmark = async (req, res) => {
  try {
    const idUser = req.user.id;
    const idJourney = req.params.id;

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
