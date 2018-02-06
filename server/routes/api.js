const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');

const db = "mongodb://Nasser:Nasser@ds121118.mlab.com:21118/fcdb"
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("Error! " + err);
    } else {
        console.log("Connection to the Database is Successful");

    }
});


// For any incoming request we are going to send a string api workds
// To test it we are going to sue http://localhost:3000/api/posts
router.get('/posts', function (req, res) {
    console.log('Get Request for all posts');
    Post.find({}) // Monogose provides a find method on the post modeul and the post model is connected to post collection in the databas
        // Once we find all the posts we are going to execute another method
        .exec(function (err, posts) {
            if (err) {
                console.log("Error retrieving posts");
            } else {
                res.json(posts);
            }
        });
});

// Get a single post
router.get('/posts/:id', function (req, res) {
    console.log('Get Request for single posts');
    Post.findById(req.params.id) // Monogose provides a findById 
        // Once we find all the posts we are going to execute another method
        .exec(function (err, posts) {
            if (err) {
                console.log("Error retrieving posts");
            } else {
                res.json(posts);
            }
        });
});


router.post('/posts', function (req, res) {
    console.log('Post a New Post');
    var newPost = new Post();
    newPost.postId = req.body.postId;
    newPost.post_title = req.body.post_title;
    newPost.post_type = req.body.post_type;
    newPost.post_status = req.body.post_status;
    newPost.post_adate = req.body.post_adate;
    newPost.post_author = req.body.post_author;
    newPost.post_data = req.body.post_data;
    newPost.post_excerpt = req.body.post_excerpt;
    newPost.post_img = req.body.post_img;
    newPost.post_img_title = req.body.post_img_title;
    newPost.save(function (err, insertedPost) {
        if (err) {
            console.log('Error saving post');
        } else {
            res.json(insertedPost);
        }
    }); // mongoose has a save method
});


// Put Request
router.put('/posts/:id', function (req, res) {
    console.log("update a post");
    Post.findByIdAndUpdate(req.params.id, {
        $set: {
            postId: req.body.postId,
            post_title: req.body.post_title,
            post_type: req.body.post_type,
            post_status: req.body.post_status,
            post_adate: req.body.post_adate,
            post_author: req.body.post_author,
            post_data: req.body.post_data,
            post_excerpt: req.body.post_excerpt,
            post_img: req.body.post_img,
            post_img_title: req.body.post_img_title,
        }
    },
        {
            // here we can get both the updated post values and original values before updating based on the true or false values
            new: true // If it is true that means it will return the Post with the new updated values. If it's false it will returned the Post object with the old values before updating
        },
        function (err, updatedPost) {
            if (err) {
                res.send("Error updating post");
            } else {
                res.json(updatedPost);
            }
        }
    );
});

// Delete Post
router.delete('/posts/:id', function(req,res){
    console.log('Deleting a Post');
    Post.findByIdAndRemove(req.params.id,function(err,deletedPost){
        if(err){
            res.send("Error deleting post");
        }else{
            res.json(deletedPost);
        }
    });
});
// Export the router
module.exports = router;