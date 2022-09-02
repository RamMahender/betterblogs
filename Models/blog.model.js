var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    AuthorId:{
        type:String
    },
    ThemesId:{
        type:String
    },
    status: { type: Boolean, default: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('blog_post', blogSchema);