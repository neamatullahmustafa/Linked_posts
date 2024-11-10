import bcrypt from "bcrypt";

const comparePassword = async (req, res, next) => {
  const { password } = req.body;
  const { passwordHash } = req.user;

  const isPasswordCorrect = await bcrypt.compare(password, passwordHash);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Password is incorrect" });
  }
  next();
};

export default comparePassword;
