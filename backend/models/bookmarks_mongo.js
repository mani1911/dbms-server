import { Schema, model } from "mongoose";

const BookmarkSchema = Schema({
	title: {
		type: String,
		required: true,
        unique: true
	},
    description: {
        type: String,
        required: true
    }
    
});

const BookmarkModel = model("bookmark", BookmarkSchema);
export default BookmarkModel;