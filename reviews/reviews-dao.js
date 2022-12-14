import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewByID = (reviewID) =>
    reviewsModel
        .findById({_id: reviewID})
        .populate('author')

export const findReviewsByRecipe = (recipeID) =>
    reviewsModel
        .find({recipeID})
        .sort({$natural:-1})
        .populate('author')
        .exec()

export const deleteReview = (reviewID) =>
    reviewsModel.deleteOne({_id: reviewID})