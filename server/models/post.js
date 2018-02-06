const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema=new Schema({
    postId: String,
    post_title: String,
    post_type: String,
    post_status: Boolean,
    post_adate: Date,
    post_author: String,
    post_data: String,
    post_excerpt: String,
    post_img: String,
    post_img_title: String
});

// Create module from the schema, the name of the model is post "the first post", then the schema name is postSchema, the name of the collection in the data base is post "the second post"
module.exports =mongoose.model('post',postSchema, 'post')