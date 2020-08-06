const Post = require("../models/post");
//Middleware

exports.getPostById = (req, res, next, id) => {
  Post.findById(id).exec((error, post) => {
    if (error) {
      return res.status(400).json({
        error: "Post Not Found",
      });
    }
    req.post = post;
    next();
  });
};

exports.getPost = (req, res) => {
  return res.json(req.post);
};

exports.createPost = (req, res) => {
  const { title, body, postedBy, userId } = req.body;

  if (!title || !body || !postedBy || !userId) {
    return res.status(400).json({
      error: "Please include all fields",
    });
  }
  const post = new Post({
    title,
    body,
    postedBy,
    userId,
  });

  //Saving Post to Database
  post.save((error, post) => {
    if (error) {
      res.status(400).json({
        error: "Saving post failed",
      });
    }
    res.json(post);
  });
};

exports.getAllPosts = (req, res) => {
  Post.find().exec((error, posts) => {
    if (error) {
      return res.status(400).json({
        error: "No post Found",
      });
    }
    res.json(posts);
  });
};











