import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByRecipe = (recipeID) =>
    reviewsModel
        .find({recipeID})
        .populate('author')
        .exec()