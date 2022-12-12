import * as dao from "./posts-dao.js"


const PostsController = (app) => {
    const createPost = async (req, res) => {
        const post = req.body;
        const currentUser = req.session['currentUser'];
        post.author = currentUser._id;
        const actualPost = await dao.createPost(post);
        res.json(actualPost);
    }

    const deletePost = async (req, res) => {
        const {postID} = req.params;
        const status = await dao.deletePost(postID);
        res.json(status);
    }

    const findPostsByUser = async (req, res) => {
        const user = req.params.user;
        const posts = await dao.findPostsByUser(user);
        res.json(posts);
    }

    const findPostByID = async (req, res) => {
        const postID = req.params.postID;
        const post = await dao.findPostByID(postID);
        if (post){
            res.json(post)
            return
        }
        res.sendStatus(404)
    }

    const findAllPosts = async (req, res) => {
        const posts = await dao.findAllPosts()
        res.json(posts)
    }


    app.get('/api/posts', findAllPosts);
    app.post('/api/posts', createPost);
    app.delete('/api/posts/:postID', deletePost);
    app.get('/api/posts/users/:user', findPostsByUser);
    app.get('/api/posts/:postID', findPostByID);

}

export default PostsController;