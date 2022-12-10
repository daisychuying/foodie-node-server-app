import bookmarksModel from "./bookmarks-model.js";

export const createBookmark = (bookmark) =>
    bookmarksModel.create(bookmark)

export const deleteBookmark = (bookmarkID) =>
    bookmarksModel.deleteOne({_id: bookmarkID})

export const findBooksmarkByUser = (user) =>
    bookmarksModel.find({user})

export const findUserHasBookmarked = (user, recipeID) =>
    bookmarksModel.findOne({user, recipeID})