import postsModel from "./posts-model.js";

export const createPost = (post) =>
    postsModel.create(post)

export const deletePost = (postID) =>
    postsModel.deleteOne({_id: postID})

export const findPostsByUser = (user) =>
    postsModel.find({user}).sort({$natural:-1})

export const findPostByID = (postID) =>
    postsModel
        .findById(postID)
        .populate('author')
        .exec()

export const findAllPosts = async () =>
    await postsModel.find().sort({$natural:-1})
