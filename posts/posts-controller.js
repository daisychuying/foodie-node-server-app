import * as dao from "./posts-dao.js"
import cloudinary from "../utils/cloudinary.js";


const PostsController = (app) => {
    const createPost = async (req, res) => {
        const post = req.body;
        try {
            const fileStr = post.image;
            const uploadedResponse = await cloudinary.uploader.upload(
                fileStr, {upload_preset: 'dev_setups'}
            )
            post.image = uploadedResponse.url;
            const actualPost = await dao.createPost(post);
            res.json(actualPost);
        } catch (e) {
            console.log(e);
        }
    }

    const deletePost = async (req, res) => {
        const {postID} = req.params;
        const status = await dao.deletePost(postID);
        res.json(status);
    }

    const findPostsByUser = async (req, res) => {
        const uid = req.params.uid;
        const posts = await dao.findPostsByUser(uid);
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

    const findPostBySearchTerm = async (req, res) => {
        const {searchTerm} = req.params;
        const posts = await dao.findPostBySearchTerm(searchTerm);
        res.json(posts);
    }


    app.get('/api/posts', findAllPosts);
    app.post('/api/posts', createPost);
    app.delete('/api/posts/:postID', deletePost);
    app.get('/api/posts/users/:uid', findPostsByUser);
    app.get('/api/posts/:postID', findPostByID);
    app.get('/api/posts/search/:searchTerm', findPostBySearchTerm);

}

export default PostsController;