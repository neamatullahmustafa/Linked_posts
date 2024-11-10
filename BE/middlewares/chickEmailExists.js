import { dbConnection } from "../database/dbConnection.js";

const connect = dbConnection();

const chickEmailExists = (req, res, next) => {
  const { email } = req.body;
  const query = `SELECT email FROM users WHERE email = '${email}'`;
  connect.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error" });
    } else {
      if (result.length > 0) {
        res.status(409).json({ message: "Email already exists" });
      } else {
        next();
      }
    }
  });
};

export default chickEmailExists;
