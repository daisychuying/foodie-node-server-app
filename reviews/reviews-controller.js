import * as dao from "./reviews-dao.js"

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body;
        const currentUser = req.session['currentUser'];
        review.author = currentUser._id;
        const actualReview = await dao.createReview(review);
        res.json(actualReview);
    }

    const findReviewsByRecipe = async (req, res) => {
        const {recipeID} = req.params;
        const reviews = await dao.findReviewsByRecipe(recipeID);
        res.json(reviews);
    }

    app.post('/api/reviews', createReview);
    app.get('/api/recipes/:recipeID/reviews', findReviewsByRecipe);

}

export default ReviewsController;