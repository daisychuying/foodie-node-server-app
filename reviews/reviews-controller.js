import * as dao from "./reviews-dao.js"

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body;
        const actualReview = await dao.createReview(review);
        const fullReview = await dao.findReviewByID(actualReview._id)
        res.json(fullReview);
    }

    const findReviewsByRecipe = async (req, res) => {
        const {recipeID} = req.params;
        const reviews = await dao.findReviewsByRecipe(recipeID);
        res.json(reviews);
    }

    const deleteReview = async (req, res) => {
        const {reviewID} = req.params;
        const status = await dao.deleteReview(reviewID);
        res.json(status);
    }

    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:reviewID', deleteReview);
    app.get('/api/recipes/:recipeID/reviews', findReviewsByRecipe);

}

export default ReviewsController;