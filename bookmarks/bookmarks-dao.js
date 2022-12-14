import bookmarksModel from "./bookmarks-model.js";

export const createBookmark = (bookmark) =>
    bookmarksModel.create(bookmark)

export const deleteBookmark = (bookmarkID) =>
    bookmarksModel.deleteOne({_id: bookmarkID})

export const findBookmarksByUser = (user) =>
    bookmarksModel.find({user}).sort({$natural:-1})

export const findUserHasBookmarked = (user, recipeID) =>
    bookmarksModel.findOne({user, recipeID})

export const findTopBookmarked = () =>
    bookmarksModel.aggregate([{$group: {_id:"$recipeID", count: {$sum:1}}}, {$sort: {count: -1}}]).limit(1);

export const findBookmarkByRecipeID = (recipeID) =>
    bookmarksModel.findOne({recipeID})