import * as dao from "./bookmarks-dao.js"

const BookmarksController = (app) => {
    const createBookmark = async (req, res) => {
        const bookmark = req.body;
        const currentUser = req.session['currentUser'];
        bookmark.user = currentUser._id;
        const actualBookmark = await dao.createBookmark(bookmark);
        res.json(actualBookmark);
    }

    const findBookmarksByUser = async (req, res) => {
        const user = req.params.user;
        const bookmarks = await dao.findBooksmarkByUser(user);
        res.json(bookmarks);
    }


    app.post('/api/bookmarks', createBookmark);
    app.get('/api/users/:user/bookmarks', findBookmarksByUser);
}

export default BookmarksController;