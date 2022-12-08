import mongoose from "mongoose";
import bookmarksSchema from "./bookmarks-schema.js";

const bookmarksModel = mongoose.model('BookmarkModel', bookmarksSchema)

export default bookmarksModel