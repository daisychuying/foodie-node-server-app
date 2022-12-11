import * as userDao from './users-dao.js'

let currentUser = null

const UsersController = (app) => {

    // Users
    const findAllUsers = async (req, res) => {
        const users = await userDao.findAllUsers()
        res.json(users)
    }

    const findUserById = async (req, res) => {
        const uid = req.params.uid
        const user = await userDao.findUserById(uid)
        if (user) {
            res.json(user)
            return
        }
        res.sendStatus(404)
    }

    const createUser = async (req, res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser)
        res.json(actualUser)
    }

    const updateUser = async (req, res) => {
        const uid = req.params.uid;
        const updates = req.body
        const status =await userDao.updateUser(uid, updates)
        res.json(status)
    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await userDao.deleteUser(uid)
        res.json(status)
    }


    // User Profile
    const register = async (req, res) => {
        const user = req.body;
        const existingUser = await userDao
            .findUserByUsername(user.username)
        if(existingUser) {
            res.sendStatus(403)
            return
        }
        const currentUser = await userDao.createUser(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await userDao
            .findUserByCredentials(
                credentials.username, credentials.password)
        if(existingUser) {
            req.session['currentUser'] = existingUser
            res.json(existingUser)
            return
        }
        res.sendStatus(403)
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    const profile = (req, res) => {
        if (req.session['currentUser']) {
            res.send(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    }


    app.get('/api/users', findAllUsers)
    app.get('/api/users/:uid', findUserById)
    app.post('/api/users', createUser)
    app.put('/api/users/:uid', updateUser)
    app.delete('/api/users/:uid', deleteUser)

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/logout', logout)
    app.post('/api/profile', profile)
}

export default UsersController