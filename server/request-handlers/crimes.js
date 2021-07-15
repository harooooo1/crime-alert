const User = require('../database-setup').User;
const Post = require('../database-setup').Post;
const Image = require('../database-setup').Image;
const errs = require('./auth');
const fs = require("fs");

async function getPosts(req, res, next) {

    const listPosts = await Post.findAll();

    res.send({
        code: 'Success',
        data: listPosts
    });

    return next();
}

async function getPostById(req, res, next) {
    const postId = req.params.id;
    const listedPost = await Post.findOne({
        where: {
            id: postId
        }
    });

    res.send({
        code: 'Success',
        data: listedPost,
    });

    return next();
}

async function createPost(req, res, next) {

    const userId = req.get('userId');
    const postInfo = req.body.info;

    const newPost = {
        UserId: userId,
        title: postInfo.title,
        text: postInfo.text,
        state: 0,
    };

    // mix in a photo somehow

    const post = await Post.create(newPost);

    res.send({
        code: 'Success',
        data: post,
    });

    Image.create({
        type: postInfo.imgtype,
        name: postInfo.imgname,
        PostId: post.id
    });

    return next();
}

async function deletePost(req, res, next) {

    const postId = req.params.id;
    const deleterId = req.get('userId');

    await Post.destroy({
        where: {
            id: postId,
            UserId: deleterId
        }
    });

    res.send({ code: 'Success', message: "post deleted" });
    return next();
}

async function editPost(req, res, next) {

    const postId = req.params.id;
    const editorId = req.get('userId');

    const editPost = await Post.findOne({
        where: {
            id: postId,
            UserId: editorId
        }
    });

    editPost.text = req.body.text;
    await editPost.save();

    res.send({ code: 'Success', data: editPost });
    return next();

}

module.exports.getPosts = getPosts;
module.exports.getPostById = getPostById;
module.exports.createPost = createPost;
module.exports.deletePost = deletePost;
module.exports.editPost = editPost;