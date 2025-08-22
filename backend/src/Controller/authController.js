const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Model/userModel.js");

const register = async (req, res) => {
  try {
    const { name, email, password, avatar, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ status: 400, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let response = new User({
      name,
      email,
      password: hashedPassword,
      avatar,
      role,
    });

    response = await response.save();

    return res.status(201).json({
      status: 201,
      msg: "User registered successfully",
      response,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register };
