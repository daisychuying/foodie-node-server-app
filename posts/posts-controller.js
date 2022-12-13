import * as dao from "./posts-dao.js"
import cloudinary from "../utils/cloudinary.js";


const PostsController = (app) => {
    const createPost = async (req, res) => {
        const post = req.body;
        // const currentUser = req.session['currentUser'];
        // console.log(currentUser)
        // post.author = currentUser._id;
        // const actualPost = await dao.createPost(post);
        // res.json(actualPost);
        // console.log(post);
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
    app.get('/api/posts/users/:uid', findPostsByUser);
    app.get('/api/posts/:postID', findPostByID);

}

export default PostsController;