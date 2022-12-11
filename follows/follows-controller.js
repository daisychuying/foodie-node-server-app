import * as dao from './follows-dao.js'
const FollowsController = (app) => {
    const followUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await dao.followUser(follow)
        res.json(actualFollow)
    }
    const findFollowers = async (req, res) => {
        const followed = req.params.followed
        const followers = await dao.findFollowers(followed)
        res.json(followers)
    }
    const findFollowing = async (req, res) => {
        const follower = req.params.follower
        const followed = await dao.findFollowing(follower)
        res.json(followed)
    }

    const findUserHasFollowed = async (req, res) => {
        const followed = req.params.followed
        const follower = req.params.follower
        const existingFollow = await dao.findUserHasFollowed(followed, follower)
        res.json(existingFollow)
    }

    const unfollowUser = async (req, res) => {
        const followed = req.params.followed
        const follower = req.params.follower
        const existingFollow = await dao.findUserHasFollowed(followed, follower)
        if (existingFollow){
            const status = await dao.unfollowUser(existingFollow._id)
            res.json(status)
        } else {
            res.json(404)
        }
    }

    app.post('/api/follows', followUser)
    app.get('/api/users/:followed/followers', findFollowers)
    app.get('/api/users/:follower/following', findFollowing)
    app.get('/api/users/:followed/:follower', findUserHasFollowed)
    app.delete('/api/users/:followed/:follower', unfollowUser)
}

export default FollowsController