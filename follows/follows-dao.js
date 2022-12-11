import followsModel from "./follows-model.js";
import bookmarksModel from "../bookmarks/bookmarks-model.js";

export const followUser = (follow) =>
    followsModel.create(follow)

export const findFollowers = (followed) =>
    followsModel.find({followed})
        .populate('follower')
        .exec()

export const findFollowing = (follower) =>
    followsModel.find({follower})
        .populate('followed')
        .exec()

export const findUserHasFollowed = (followed, follower) =>
    followsModel.findOne({followed, follower})

export const unfollowUser = (followId) =>
    followsModel.deleteOne({_id: followId})