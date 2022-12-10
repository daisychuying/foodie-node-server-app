import mongoose from "mongoose";

const bookmarksSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    recipeID: {type: String},
    image: String,
    title: String
}, {collection: 'bookmarks'})

export default bookmarksSchema