import mongoose from "mongoose";

const questionsSchema = mongoose.Schema({
    post: {type: mongoose.Schema.Types.ObjectId, ref:'PostModel'},
    question: String,
    answer: String,
    replier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'questions'})
export default questionsSchema