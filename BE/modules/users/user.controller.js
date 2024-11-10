import { dbConnection } from "../../database/dbConnection.js";
import bcrypt from "bcrypt";
const connect = dbConnection();

const register = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  connect.query(
    "INSERT INTO users (name, email, password ,username,gender) ) VALUES (?, ?, ?,?,?)",
    [
      req.body.name,
      req.body.email,
      hashedPassword,
      req.body.username,
      req.body.gender,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(201).json({
        message: "User registered successfully",
        user: { id: result.insertId },
      });
    }
  );
};

const logIn = (req, res) => {
  connect.query(
    "SELECT * FROM users WHERE email = ? ",
    [req.body.email],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid email" });
      } else {
        const isPasswordValid = bcrypt.compareSync(
          req.body.password,
          result[0].password
        );
        if (isPasswordValid) {
          //   const token = createToken(result[0].id, result[0].email);
          res
            .status(200)
            .json({ message: "Logged in successfully", id: result[0].id });
        } else {
          return res.status(401).json({ message: "Invalid password" });
        }
      }
    }
  );
};

export { register, logIn };
