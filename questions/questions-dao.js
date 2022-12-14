import QuestionsModel from "./questions-model.js";

export const createQuestion = (question) =>
    QuestionsModel.create(question)

export const deleteQuestion = (questionID) =>
    QuestionsModel.deleteOne({_id: questionID})

export const findQuestionsByPostID = (post) =>
    QuestionsModel
        .find({post})
        .sort({$natural:-1})
        .populate('author')
        .populate('post')
        .exec()