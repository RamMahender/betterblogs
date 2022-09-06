const express = require('express');
const router = express.Router();
const BlogService = require("../Services/blog.service")


//Create Blog
router.post('/addpost', BlogService.addpost)

//Get Posts
router.get('/getposts', BlogService.getposts)

//Edit Posts
router.put('/editposts/:_id', BlogService.editpost)

//Delete Posts
router.delete('/deleteposts/:_id', BlogService.deletepost)

module.exports = router