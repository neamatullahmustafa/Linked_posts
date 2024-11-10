import { dbConnection } from "../../database/dbConnection.js";

const connect = dbConnection();
const allPosts = (req, res) => {
  connect.query(
    "   SELECT posts.*, users.username ,users.gender  FROM posts  INNER JOIN users ON posts.user_id = users.id",
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
    `SELECT posts.*, users.username, users.gender, users.cover,users.profile, users.bio 
     FROM posts
     INNER JOIN users ON posts.user_id = users.id
     WHERE posts.user_id = ?`,
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }

      const user =
        results.length > 0
          ? {
              username: results[0].username,
              gender: results[0].gender,
              cover_image: results[0].cover,
              bio: results[0].bio,
              profile: results[0].profile,
            }
          : null;

      res.status(201).json({
        user,
        posts: results.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.description,
          createdAt: post.createdAt,
        })),
      });
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
