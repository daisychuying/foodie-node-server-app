import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    title: {type: String, required: true},
    ingredients: {type: String},
    readyInMinutes: {type: String},
    instructions: {type: String},
    image: {type: String}
}, {collection: "posts"})

export default postsSchema;
