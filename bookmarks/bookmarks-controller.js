import * as dao from "./bookmarks-dao.js"
import {findBookmarkByRecipeID, findTopBookmarked} from "./bookmarks-dao.js";

const BookmarksController = (app) => {
    const createBookmark = async (req, res) => {
        const bookmark = req.body;
        // const currentUser = req.session['currentUser'];
        // bookmark.user = currentUser._id;
        const actualBookmark = await dao.createBookmark(bookmark);
        res.json(actualBookmark);
    }

    const deleteBookmark = async (req, res) => {
        const {user, recipeID} = req.params;
        const bookmark = await dao.findUserHasBookmarked(user, recipeID);
        if (bookmark) {
            const status = await dao.deleteBookmark(bookmark._id);
            res.json(status);
        } else {
            res.json(404)
        }
    }

    const findBookmarksByUser = async (req, res) => {
        const user = req.params.user;
        const bookmarks = await dao.findBookmarksByUser(user);
        res.json(bookmarks);
    }

    const findUserHasBookmarked = async (req, res) => {
        const {user, recipeID} = req.params;
        const bookmark = await dao.findUserHasBookmarked(user, recipeID);
        if (bookmark) {
            res.json(true)
        } else {
            res.json(false)
        }
    }

    const findTopBookmarked = async (req, res) => {
        const top = await dao.findTopBookmarked();
        const bookmark = await dao.findBookmarkByRecipeID(top[0]._id);
        res.json(bookmark);
    }

    app.post('/api/bookmarks', createBookmark);
    app.get('/api/users/:user/bookmarks', findBookmarksByUser);
    app.get('/api/users/:user/bookmarks/:recipeID', findUserHasBookmarked);
    app.delete('/api/users/:user/bookmarks/:recipeID', deleteBookmark);
    app.get('/api/bookmarks/top', findTopBookmarked);
}

export default BookmarksController;