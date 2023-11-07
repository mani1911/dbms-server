import { Schema, model } from "mongoose";

const MovieSchema = Schema({
	name: {
		type: String,
		required: true,
	},
    description: {
        type: String,
        required: true
    },
    release_date : {
        type: Date,
        required: false
    },
    rating : {
        type: Number,
        required: false
    },
    total_collection : {
        type: Number,
        required: false
    }
    
});

const MovieModel = model("movie", MovieSchema);
export default MovieModel;