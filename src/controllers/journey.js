const { journey, user } = require("../../models");

// Get all data journey
exports.getJourneys = async (req, res) => {
  try {
    const journeys = await journey.findAll({
      order: [["createdAt", "DESC"]],
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
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    res.status(200).send({
      status: "success",
      data: journeys,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// add data journey
exports.addJourney = async (req, res) => {
  try {
    const journeyExists = await journey.findOne({
      where: {
        title: req.body.title,
      },
    });
    if (journeyExists) {
      res.status(500).send({
        status: "failed",
        message: "journey already exists",
      });
      return false;
    }

    const idUser = req.user.id;
    const path = process.env.IMG_URL;
    const upload = req.file.filename;
    const imageUpload = path + upload;
    const newJourney = await journey.create({
      ...req.body,
      image: imageUpload,
      idUser,
    });
    const { title, description } = newJourney;

    res.status(200).send({
      status: "success",
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Get detail journey with id params
exports.getDetailJourney = async (req, res) => {
  try {
    const idJourney = req.params.id;
    const findJourney = await journey.findOne({
      where: {
        id: idJourney,
      },
      attributes: {
        exclude: ["createdAt, updatedAt"],
      },
    });

    res.status(200).send({
      status: "success",
      data: findJourney,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
