import bookmarksModel from "./bookmarks-model.js";

export const createBookmark = (bookmark) =>
    bookmarksModel.create(bookmark)

export const findBooksmarkByUser = (user) =>
    bookmarksModel.find({user})