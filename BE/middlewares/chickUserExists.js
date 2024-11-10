import { dbConnection } from "../database/dbConnection.js";

const connect = dbConnection();

const checkUserExists = (req, res, next) => {
  const userId = req.params.id;

  connect.query(
    "SELECT id FROM users WHERE id = ?",
    [userId],
    (err, userResults) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (userResults.length === 0) {
        console.log(req.params.id, userResults);
        return res.status(404).json({ message: "User not found" });
      }
      next();
    }
  );
};

export default checkUserExists;
