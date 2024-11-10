import bcrypt from "bcrypt";
const hashPassword = async (req, res, next) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 4);
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error hashing password", error });
  }
};

export default hashPassword;
