import mongoose from "mongoose";

const bookmarksSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    recipeID: {type: Number}
}, {collection: 'bookmarks'})

export default bookmarksSchema