import * as dao from "./questions-dao.js";
import {findQuestionsByPostID} from "./questions-dao.js";

const QuestionsController = (app) => {
    const createQuestion = async (req, res) => {
        const question = req.body;
        const currentUser = req.session['currentUser'];
        question.author = currentUser._id;
        const actualQuestion = await dao.createQuestion(question);
        res.json(actualQuestion);
    }

    const deleteQuestion = async (req, res) => {
        const {questionID} = req.params;
        const status = await dao.deleteQuestion(questionID);
        res.json(status);
    }

    const findQuestionsByPostID = async (req, res) => {
        const {postID} = req.params;
        const questions = await dao.findQuestionsByPostID(postID);
        res.json(questions);
    }

    app.post('/api/questions', createQuestion);
    app.delete('/api/questions/:questionID', deleteQuestion);
    app.get('/api/posts/:postID/questions', findQuestionsByPostID);

}

export default QuestionsController;