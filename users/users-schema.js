import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    firstName: String,
    lastName: String,
    introduction: String,
    certifiedChefID: {type: String},
    foodieFavorite: {type: String, enum:['', 'CHINESE', 'JAPANESE','AMERICAN','ITALIAN','MEXICAN', 'SPANISH', 'THAI', 'FRENCH', 'KOREAN', 'BRITISH', 'MEDITERRANEAN', 'INDIAN', 'CARIBBEAN', 'GREEK', 'VIETNAMESE','AFRICAN']},
    adminsChoice:{type: Number},
    role: {type: String, enum: ['ADMIN', 'CHEF', 'FOODIE']}
}, {collection: 'users'})

export default usersSchema