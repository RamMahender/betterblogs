var blogSchema = require("../Models/blog.model")

exports.addpost = function (req, res) {
    var postdata = {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        category: req.body.category,
        AuthorId: req.body.AuthorId,
        ThemesId: req.body.ThemesId
    }
    blogSchema.create(postdata, function (err, data) {
        if (err) {
            res.json({
                success: false,
                message: err
            })
        } else {
            res.json({
                success: true,
                data
            })
        }
    })
}

exports.getposts = function (req, res) {
    blogSchema.find({ status: true }, function (err, data) {
        if (err) {
            res.json({
                success: false,
                message: "Something went wrong " + err
            })
        } else if (data.length > 0) {
            res.json({
                success: true,
                Total_Posts: data.length,
                data
            })
        } else {
            res.json({
                success: false,
                message: "Data not found"
            })
        }
    })
}

exports.editpost = function (req, res) {
    var updatedata = {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        category: req.body.category
    }
    blogSchema.findOneAndUpdate({ _id: req.params._id }, updatedata, function (err, data) {
        if (err) {
            res.json({
                success: false,
                message: err
            })
        } else if (data) {
            res.json({
                success: true,
                message: "Updated data"
            })
        } else {
            res.json({
                success: false,
                message: "Data not found"
            })
        }
    })
}

exports.deletepost = function (req, res) {
    blogSchema.findOneAndDelete({ _id: req.params._id }, { status: false }, function (err, deldata) {
        if (err) {
            res.json({
                success: false,
                message: err
            })
        } else if (deldata) {
            res.json({
                success: true,
                message: "Deleted post successfully"
            })
        } else {
            res.json({
                success: false,
                message: "Post not found"
            })
        }
    })
}