const { user } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  try {
    const { fullname, email, password, phone, address } = req.body;
    const schema = Joi.object({
      fullname: Joi.string().min(6).required(),
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate({ fullname, email, password });
    const emailExists = await user.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (emailExists) {
      res.status(500).send({
        status: "failed",
        message: "email already exists",
      });
      return false;
    }
    if (error)
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });

    const saltRounds = await bcrypt.genSalt(10);
    const hashingPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await user.create({
      fullname: fullname,
      email: email,
      password: hashingPassword,
      phone: phone,
      address: address,
      image: process.env.IMG_URL + "profile.png",
    });
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).send({
      status: "success",
      data: {
        user: {
          fullname: newUser.fullname,
          email: newUser.email,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });

    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    const isValid = await bcrypt.compare(req.body.password, userExist.password);
    if (!isValid) {
      return res.status(400).send({
        status: "failed",
        message: "email/password incorrect",
      });
    }
    const token = jwt.sign({ id: userExist.id }, process.env.JWT_SECRET);
    res.status(200).send({
      status: "success",
      data: {
        user: {
          id: userExist.id,
          fullname: userExist.fullname,
          email: userExist.email,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "email/password incorrect",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const id = req.user.id;
    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "success",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.name,
          email: dataUser.email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
