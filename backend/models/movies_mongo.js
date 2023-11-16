import { Schema, model } from "mongoose";

const MovieSchema = Schema({
	title: {
		type: String,
		required: true,
	},
    description: {
        type: String,
        required: true
    },
    maturity: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    
});

const MovieModel = model("movie", MovieSchema);
export default MovieModel;