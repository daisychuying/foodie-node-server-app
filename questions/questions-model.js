import mongoose from "mongoose";
import questionsSchema from "./questions-schema.js";

const questionsModel = mongoose.model('QuestionModel', questionsSchema)

export default questionsModel