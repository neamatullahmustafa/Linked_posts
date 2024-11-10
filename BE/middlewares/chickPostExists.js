import { dbConnection } from "../database/dbConnection.js";

const connect = dbConnection();

const checkPostExists = (req, res, next) => {
  const postId = req.params.id;

  connect.query(
    "SELECT id FROM posts WHERE id = ?",
    [postId],
    (err, postResults) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (postResults.length === 0) {
        console.log(req.params.id, postResults);
        return res.status(404).json({ message: "User not found" });
      }
      next();
    }
  );
};

export default checkPostExists;
