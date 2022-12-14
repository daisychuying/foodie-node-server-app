import * as dao from "./questions-dao.js";

const QuestionsController = (app) => {
    const createQuestion = async (req, res) => {
        const question = req.body;
        const actualQuestion = await dao.createQuestion(question);
        const fullQuestion = await dao.findQuestionByQuestionID(actualQuestion._id);
        res.json(fullQuestion);
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

    const updateQuestion = async (req, res) => {
        const {questionID} = req.params;
        const questionUpdate = req.body;
        const status = await dao.updateQuestion(questionID, questionUpdate);
        res.send(status);
    }

    app.post('/api/questions', createQuestion);
    app.delete('/api/questions/:questionID', deleteQuestion);
    app.get('/api/posts/:postID/questions', findQuestionsByPostID);
    app.put('/api/questions/:questionID', updateQuestion);

}

export default QuestionsController;