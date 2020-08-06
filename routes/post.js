const express = require("express");
const router = express.Router();

//Controllers
const {
  createPost,
  getAllPosts,
} = require("../controllers/post");

//Middleware
const { isLoggedIn } = require("../middleware/isLoggedin");
const { isAuthenticated } = require("../middleware/isAuthenticated");

//Post route
router.post("/create", isLoggedIn, isAuthenticated, createPost);
router.get("/feed", getAllPosts);

//Exporting the Routes
module.exports = router;
