import QuestionsModel from "./questions-model.js";

export const createQuestion = (question) =>
    QuestionsModel.create(question)

export const findQuestionByQuestionID = (questionID) =>
    QuestionsModel
        .findById(questionID)
        .populate('author')
        .populate({
            path: 'post',
            populate: {
                path: 'author',
                model: 'UserModel'
            }
        })

export const deleteQuestion = (questionID) =>
    QuestionsModel.deleteOne({_id: questionID})

export const updateQuestion = (questionID, questionUpdate) =>
    QuestionsModel.updateOne({_id: questionID}, {$set: questionUpdate})

export const findQuestionsByPostID = (postID) =>
    QuestionsModel
        .find({post: postID})
        .sort({$natural:-1})
        .populate('author')
        .populate({
            path: 'post',
            populate: {
                path: 'author',
                model: 'UserModel'
            }
        })
        .exec()