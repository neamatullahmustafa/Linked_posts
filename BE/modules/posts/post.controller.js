import { dbConnection } from "../../database/dbConnection.js";

const connect = dbConnection();
const allPosts = (req, res) => {
  connect.query(
    "   SELECT posts.*, users.name ,users.gender  FROM posts  INNER JOIN users ON posts.user_id = users.id",
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(201).json({ posts: results });
    }
  );
};

const userPosts = (req, res) => {
  const userId = req.params.id;
  connect.query(
    "SELECT * FROM posts WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(201).json({ posts: results });
    }
  );
};
const updatePost = (req, res) => {
  const postId = req.params.id;
  const { title, description } = req.body;

  connect.query(
    "UPDATE posts SET title = ?, `description` = ? WHERE id = ?",
    [title, description, postId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json({
        message: "Post updated successfully",
        post: { id: postId, title, description },
      });
    }
  );
};
const deletePost = (req, res) => {
  const postId = req.params.id;

  connect.query("DELETE FROM posts WHERE id = ?", [postId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  });
};

const addPost = (req, res) => {
  const { title, description, user_id } = req.body;

  connect.query(
    "INSERT INTO posts (title, description, user_id) VALUES (?, ?, ?)",
    [title, description, user_id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(201).json({
        message: "Post added successfully",
        post: { id: result.insertId, title, description, user_id },
      });
    }
  );
};

export { allPosts, userPosts, updatePost, deletePost, addPost };
