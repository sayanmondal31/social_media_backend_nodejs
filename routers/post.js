const router = require("express").Router();

const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/").post(createPost).get(getAllPosts);
router.route("/").get(getSinglePost).patch(updatePost).delete(deletePost);

module.exports = router;
