const Post = require("../models/post");
// create post controller which take data from user
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};
// get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

// get single post
exports.getSinglePost = async (req, res) => {
  try {
    const postDetail = await Post.findById(req.query.id);

    if (!postDetail) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({
      message: "Post fetched successfully",
      postDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

// update post
exports.updatePost = async (req, res) => {
  try {
    const postDetail = await Post.findById(req.query.id);

    if (!postDetail) return res.status(404).json({ message: "Post not found" });

    const updatedPost = await Post.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

// delete post
exports.deletePost = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.query.id);

    res.status(200).json({
      message: "Post deleted successfully",
      deletePost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};
