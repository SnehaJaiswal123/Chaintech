const User = require("../models/user");

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ([name, email, password].some((field) => field?.trim() === "")) {
      return res
        .status(400)
        .json({ Success: false, message: "All fields are required" });
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res
        .status(409)
        .json({
          Success: false,
          message: "User with this email already exist",
        });
    }

    const createdUser = await User.create(req.body);
    const token = await createdUser.generateAuthToken()

    return res
      .status(200)
      .json({
        Success: true,
        message: "User registered successfully",
        createdUser,
        token
      });
  } catch (err) {
    res.status(500).json({ Success: false, message: "Something went wrong" });
    console.log(err);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ([email, password].some((field) => field?.trim() === "")) {
      return res
        .status(400)
        .json({ Success: false, message: "All fields are required" });
    }

    const user = await User.findByCredentials(req.body.email, req.body.password)

    if (!user) {
      return res
        .status(404)
        .json({ Success: false, message: "Invalid Credentials" });
    }
    const token = await user.generateAuthToken()

    return res
      .status(200)
      .json({
        Success: true,
        message: "User logged in Successfully",
        loggedInUser,
        token
      });
  } catch (err) {
    res.status(500).json({ Success: false, message: "Something went wrong" });
    console.log(err);
  }
};

module.exports = { Register, Login };
