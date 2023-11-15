const User = require("../../models/user/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../../utils/error");

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    // // Check if the roles match
    // if (validUser.role !== role) {
    //   return next(errorHandler(403, "Invalid Role for Sign-In"));
    // }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Password"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...data } = validUser._doc;
    // const expiryDate = new Date(Date.now() + 3600000);
    res
      // .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({
        success: true,
        data: data,
        token,
        message: "Signed in Successfully",
      });
  } catch (error) {
    next(error);
  }
};

const signOut = async (req, res, next) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ success: true, message: "Signed out Successfully" });
};

module.exports = { signUp, signIn, signOut };
