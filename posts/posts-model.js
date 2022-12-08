import mongoose from "mongoose";
import postsSchema from "./posts-schema.js";
import bookmarksSchema from "../bookmarks/bookmarks-schema.js";


const postsModel = mongoose.model('PostModel', postsSchema)

export default postsModel