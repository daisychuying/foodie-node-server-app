import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    comment: String,
    postID: {type: mongoose.Schema.Types.ObjectId, ref:'PostModel'},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'comments'})
export default commentsSchema