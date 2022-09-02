const express = require('express');
const router = express.Router();
const BlogService = require("../Services/blog.service")


//Create Blog
router.post('/addpost', BlogService.addpost)

//Get Posts
router.get('/getposts' , BlogService.getposts)

module.exports = router;