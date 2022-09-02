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

exports.getposts = function(req, res){
    blogSchema.find({status:true},function(err ,data){
        if(err){
            res.json({
                success:false,
                message: "Something went wrong " + err
            })
        } else if(data.length > 0){
            res.json({
                success:true,
                Total_Posts : data.length,
                data
            })
        }else{
            res.json({
                success:false,
                message:"Data not found"
            })
        }
    })
}