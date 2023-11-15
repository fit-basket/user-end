const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../../utils/error");
const Admin = require("../../models/admin/admin");

const signUp = async (req, res, next) => {
  const { name, email, password, businessName, type, phone, image, address } =
    req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newAdmin = new Admin({
    name,
    email,
    password: hashedPassword,
    businessName,
    type,
    phone,
    image,
    address,
  });

  try {
    await newAdmin.save();
    res
      .status(201)
      .json({ success: true, message: "Business registered successfully" });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validAdmin = await User.findOne({ email });
    if (!validAdmin) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validAdmin.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Password"));

    const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...data } = validAdmin._doc;
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
  res.status(200).json({ success: true, message: "Signed out Successfully" });
};

module.exports = { signUp, signIn, signOut };
